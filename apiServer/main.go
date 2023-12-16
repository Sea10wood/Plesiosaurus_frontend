package main

import (
	"fmt"
	"log"
	"net/http"
)

type Dirs struct {
	FullPath string `json:"full_path"`
	Path     string `json:"path"`
	Depth    int    `json:"depth"`
}

type Images struct {
	Date string `json:"date"`
	Path string `json:"path"`
}

type Receive struct {
	Dir     string `json:"dir"`
	ImgRoot string `json:"img_root"`
	Path    string `json:"path"`
}

type Result struct {
	Status string `json:"code"`
}

func main() {
	http.HandleFunc("/", HandlePostRequest)

	fmt.Println("http://localhost:8080/")
	fmt.Println("curl -X POST http://localhost:8080/")
	fmt.Println("touch testImg/unneeded.png")
	fmt.Println("curl -X POST -H \"Content-Type: application/json\" -d '{\"dir\": \"../\"}' http://localhost:8080/")
	fmt.Println("curl -X POST -H \"Content-Type: application/json\" -d '{\"img_root\": \"../\"}' http://localhost:8080/")
	fmt.Println("curl -X POST -H \"Content-Type: application/json\" -d '{\"path\": \"testImg/unneeded.png\"}' http://localhost:8080/")

	log.Fatal(http.ListenAndServe(":8080", nil))
}
