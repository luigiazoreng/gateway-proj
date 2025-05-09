import axios from 'axios';

const API_URL = 'https://api.example.com/resources';

export const getAllResources = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};

export const getResourceById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching resource with id ${id}:`, error);
        throw error;
    }
};

export const createResource = async (data: any) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error creating resource:', error);
        throw error;
    }
};

export const updateResource = async (id: string, data: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating resource with id ${id}:`, error);
        throw error;
    }
};

export const deleteResource = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting resource with id ${id}:`, error);
        throw error;
    }
};