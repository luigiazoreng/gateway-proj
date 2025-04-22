package models

type Request struct {
    ID             uint   `gorm:"primaryKey" json:"id"`
    RequestDate    string `json:"request_date"`
    Status         string `json:"status"`
    Source         string `json:"source"`
    ConnectionID   uint   `json:"connection_id"`
    CreatedEvents  int    `json:"created_events"`
    IgnoredEvents  int    `json:"ignored_events"`
    Header         string `json:"header"`
    Body           string `json:"body"`
    Connection     Connection `gorm:"foreignKey:ConnectionID"`
}