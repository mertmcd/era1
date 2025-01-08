const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Hata detaylarını logla
    res.status(500).json({ error: "Something went wrong, please try again later" });
};

export default errorMiddleware;
