import { RequestType } from "../../types";

export const mockRequests: RequestType[] = [
  {
    id: "1",
    name: "Fetch Users",
    status: "success",
    method: "GET",
    url: "/api/users",
    timestamp: "2025-04-25T10:15:00Z",
    conn: "HTTP/1.1",
    attempts: 1,

  },
  {
    id: "2",
    name: "Create Order",
    status: "pending",
    method: "POST",
    url: "/api/orders",
    timestamp: "2025-04-25T10:17:23Z",
    conn: "HTTP/2",
    attempts: 2,
  },
  {
    id: "3",
    name: "Update Profile",
    status: "error",
    method: "PUT",
    url: "/api/profile/123",
    timestamp: "2025-04-25T10:20:10Z",
    attempts: 3,
    conn: "HTTP/1.1",
    },
  {
    id: "4",
    name: "Delete Session",
    status: "success",
    method: "DELETE",
    url: "/api/session/abc",
    timestamp: "2025-04-25T10:22:45Z",
    conn: "HTTP/1.1",
    attempts: 1,
  },
]