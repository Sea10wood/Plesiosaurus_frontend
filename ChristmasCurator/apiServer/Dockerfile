FROM golang:1.21

WORKDIR /opt/sandbox-docker-go

COPY . .

RUN go mod init changeme/apiServer
RUN go mod tidy
RUN go get github.com/rs/cors
RUN go build -o app main.go

CMD ["/opt/sandbox-docker-go/app"]
