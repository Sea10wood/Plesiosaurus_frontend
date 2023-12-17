package main

import (
	"changeme/apiServer/handler"
	"log"
	"net/http"

	"github.com/rs/cors"
)


func main() {

	mux := http.NewServeMux()
	mux.HandleFunc("/", handler.HandlePostRequest)

	// CORS レスポンスヘッダーの追加
	c := cors.Default()
	handler := c.Handler(mux)
	log.Fatal(http.ListenAndServe(":8080", handler))
}
