// =========================================================
// API CLIENT
// =========================================================

const API_BASE = 'http://localhost:3000/api';

export const apiClient = {
    async getAllBeans(type) {
        let url = `${API_BASE}/beans`;
        if (type) {
            url += `?type=${type}`;
        }

        console.log('Fetching:', url);

        const res = await fetch(url);
        const response = await res.json();

        if(response.type === 'success'){
            return response.data;
        } else {
            console.error('API error:', response);
            return [];
        }
    },

    async getBeanById(id) {
        const res = await fetch(`${API_BASE}/beans/${id}`);
        const response = await res.json();

        if(response.type === 'success'){
            return response.data;
        } else {
            return {};
        }
    },

    async createBean(beanData) {
        console.log('API: Creating bean...', beanData);

        const res = await fetch(`${API_BASE}/beans`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beanData)
        });
        const response = await res.json();
        return response;
    },

    async updateBean(id, beanData) {
        const res = await fetch(`${API_BASE}/beans/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beanData)
        });

        const data = await res.json();
        console.log('Update response:', data);
        return data;
    },

    async deleteBean(id) {
        const res = await fetch(`${API_BASE}/beans/${id}`, {
            method: 'DELETE',
        });

        const data = await res.json();
        console.log('Delete response:', data);
        return data;
    },

    async getTranslations(lang) {
        const res = await fetch(`${API_BASE}/i18n/${lang}`);
        const response = await res.json();

        if(response.type === 'success'){
            return response.data;
        } else {
            return {};
        }
    }
};