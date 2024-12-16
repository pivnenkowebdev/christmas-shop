const getData = async () => {
    try {
        const response = await fetch('./data/gifts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке JSON:', error);
        return null;
    }
};

export default getData;
