import { AxiosInstance } from "axios";
import { RequestType } from "../types";
import axios from "axios";

class EventService {
    private baseUrl: string;
    private client: AxiosInstance;
    constructor(baseUrl: string) {
        this.baseUrl = import.meta.env.VITE_API_URL + '/events';
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getEvent(id: string, idClient: string): Promise<RequestType>{
        const response = await this.client.get<RequestType>(`/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Error fetching event with id ${id}: ${response.statusText}`);
    }

    async getEvents(idClient: string): Promise<RequestType[]> {
        const response = await this.client.get<RequestType[]>(`/`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Error fetching events: ${response.statusText}`);
    }

}