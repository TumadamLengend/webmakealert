export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { icon, title, description, buttons } = req.body;

    if (!icon || !title || !description || !buttons) {
        return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết.' });
    }

    try {
        // Giải mã base64
        const decodeBase64 = (str) => decodeURIComponent(escape(atob(str)));

        const decodedIcon = decodeBase64(icon);
        const decodedTitle = decodeBase64(title);
        const decodedDescription = decodeBase64(description);
        const parsedButtons = JSON.parse(buttons).map(btn => ({
            name: decodeBase64(btn.name),
            link: decodeBase64(btn.link)
        }));

        // Giả lập tạo link tải
        const fakeDownloadLink = 'https://example.com/downloads/yourfile.dylib';

        return res.status(200).json({
            token: Math.random().toString(36).substr(2),
            downloadLink: fakeDownloadLink
        });
    } catch (err) {
        console.error('Error decoding or processing data:', err);
        return res.status(500).json({ error: 'Lỗi xử lý dữ liệu trên server.' });
    }
}
