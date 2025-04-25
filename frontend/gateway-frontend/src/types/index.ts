export interface RequestType {
  id: string
  name: string
  status: "pending" | "success" | "error"
  method: "GET" | "POST" | "PUT" | "DELETE"
  url: string
  timestamp: string
  conn?: string // connection type for display
  attempts?: number // number of attempts for display
}
