package main

import (
	"auth-api/internal/routes"
	"log/slog"
	"os"

	"github.com/gofiber/fiber/v2"
)

func main() {
	log := newLogger()
	app := fiber.New(fiber.Config{
		AppName: "Auth API",
	})
	routes.NewRoutes(log).Build(app)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	log.Info("starting server", slog.String("port", port))
	err := app.Listen(":" + port)
	if err != nil {
		log.Error("failed to start server", slog.Any("err", err))
		os.Exit(1)
	}
}
