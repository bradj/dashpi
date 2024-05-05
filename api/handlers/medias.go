package handlers

import (
	"github.com/bradj/dashpi/api/v2/database"
	"github.com/gofiber/fiber/v2"
)

type MediaController struct {
	DB *database.Queries
}

func (mc *MediaController) GetMedia(c *fiber.Ctx) error {
	id := c.QueryInt("id", 0)
	if id <= 0 {
		return c.Status(fiber.StatusBadRequest).SendString("invalid media id")
	}

	media, err := mc.DB.GetMedia(c.Context(), id)
	if isNoRows(err) {
		return c.Status(fiber.StatusNotFound).SendString("media not found")
	}
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}

	return c.JSON(media)
}

func (mc *MediaController) CreateMedia(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}
