package routes

import (
	"log/slog"

	"github.com/gofiber/fiber/v2"
)

type Routes struct {
	log *slog.Logger
}

type api struct {
	log *slog.Logger
	app *fiber.App
}

func NewRoutes(log *slog.Logger) *Routes {
	return &Routes{
		log: log,
	}
}

func (r *Routes) Build(app *fiber.App) {

	app.Get("/health", func(c *fiber.Ctx) error {return c.JSON(fiber.Map{"status": "ok"})})
	api{log: r.log, app: app}.registerRoutes()	
}


func (i api) registerRoutes() {
	api := i.app.Group("/api/v1")
	api.Get("/users", func(c *fiber.Ctx) error {
		i.log.Info("Get users")
		return c.JSON(fiber.Map{"status": "ok"})
	})
	api.Get("/users/:id", func(c *fiber.Ctx) error {
		i.log.Info("Get user by id", slog.String("id", c.Params("id")))
		return c.JSON(fiber.Map{"status": "ok"})
	})
	api.Post("/users", func(c *fiber.Ctx) error {
		i.log.Info("Create user")
		return c.JSON(fiber.Map{"status": "ok"})
	})
	api.Put("/users/:id", func(c *fiber.Ctx) error {
		i.log.Info("Update user", slog.String("id", c.Params("id")))
		return c.JSON(fiber.Map{"status": "ok"})
	})
	api.Delete("/users/:id", func(c *fiber.Ctx) error {
		i.log.Info("Delete user", slog.String("id", c.Params("id")))
		return c.JSON(fiber.Map{"status": "ok"})
	})
	api.Get("/profile", func(c *fiber.Ctx) error {
		i.log.Info("Get profile")
		return c.JSON(fiber.Map{"status": "ok"})
	})
}