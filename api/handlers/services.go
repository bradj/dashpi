package handlers

import (
	"github.com/bradj/dashpi/api/v2/database"
	"github.com/gofiber/fiber/v2"
)

type ServiceController struct {
	DB *database.Queries
}

func (sc *ServiceController) GetService(c *fiber.Ctx) error {
	id := c.QueryInt("id", 0)
	if id <= 0 {
		return c.Status(fiber.StatusBadRequest).SendString("invalid service id")
	}

	service, err := sc.DB.GetService(c.Context(), id)
	if isNoRows(err) {
		return c.Status(fiber.StatusNotFound).SendString("service not found")
	}
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}

	return c.JSON(service)
}

func (sc *ServiceController) CreateService(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}
