package models


type Attempt struct {
    ID              uint   `gorm:"primaryKey" json:"id"`
    EventID         uint   `json:"event_id"`
    AttemptDate     string `json:"attempt_date"`
    Status          string `json:"status"`
    AttemptTrigger  string `json:"attempt_trigger"`
    DeliveryLatency int    `json:"delivery_latency"`
    ResponseLatency int    `json:"response_latency"`
    Event           Event  `gorm:"foreignKey:EventID"`
}

type AttemptReqRes struct {
    ID          uint   `gorm:"primaryKey" json:"id"`
    AttemptID   uint   `json:"attempt_id"`
    Status      string `json:"status"`
    Header      string `json:"header"`
    Body        string `json:"body"`
    MessageType string `json:"message_type"`
    Attempt     Attempt `gorm:"foreignKey:AttemptID"`
}