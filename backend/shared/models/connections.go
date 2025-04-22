package models

type Connection struct {
    ID       uint   `gorm:"primaryKey" json:"id"`
    Source   string `json:"source"`
    Name     string `json:"name"`
    Destiny  string `json:"destiny"`
    Params   string `json:"params"`
    ClientID string `json:"client_id"`
}