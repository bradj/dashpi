package main

import (
	"context"
	"database/sql"
	_ "embed"
	"log"

	"github.com/bradj/dashpi/api/v2/database"
	"github.com/bradj/dashpi/api/v2/handlers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"

	_ "github.com/mattn/go-sqlite3"
)

//go:embed database/schema.sql
var ddl string

func main() {
	ctx := context.Background()
	conn, err := sql.Open("sqlite3", "dashpi.db")
	if err != nil {
		log.Fatal(err)
	}

	// create tables
	if _, err := conn.ExecContext(ctx, ddl); err != nil {
		log.Fatal(err)
	}
	
	db := database.New(conn)

	mc := &handlers.MediaController{
		DB: db,
	}
	sc := &handlers.ServiceController{
		DB: db,
	}

	app := fiber.New(fiber.Config{
    Prefork:       false,
    CaseSensitive: true,
    StrictRouting: true,
    ServerHeader:  "Fiber",
    AppName: "DashPI v1.0.0",
	})

	app.Use(logger.New())
	app.Use(recover.New())
	app.Use(requestid.New())
	app.Use(helmet.New())
	
  v1 := app.Group("/v1")

	v1.Get("/services", sc.GetService)
	v1.Post("/services", sc.CreateService)
	v1.Get("/media", mc.GetMedia)
	v1.Post("/media", mc.CreateMedia)

	app.Listen(":3000")
}
