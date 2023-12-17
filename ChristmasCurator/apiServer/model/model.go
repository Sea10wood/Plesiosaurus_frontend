package model


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