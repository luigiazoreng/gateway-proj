package models

type Event struct {
	ID              uint       `gorm:"primaryKey" json:"id"`
	RequestID       uint       `json:"request_id"`
	EventDate       string     `json:"event_date"`
	Status          string     `json:"status"`
	ConnectionID    uint       `json:"connection_id"`
	Attempts        int        `json:"attempts"`
	AttemptTrigger  string     `json:"attempt_trigger"`
	DeliveryLatency int        `json:"delivery_latency"`
	ResponseLatency int        `json:"response_latency"`
	Connection      Connection `gorm:"foreignKey:ConnectionID"`
	Request         Request    `gorm:"foreignKey:RequestID"`
}
