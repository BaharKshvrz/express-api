const paginationMiddleware = (pageSize) => {
    return (req, res, next) => {
        const pageNumber = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || pageSize;
        const sortField = req.query.sortField || "_id";  // Default sorting field
        const skip = (pageNumber - 1) * perPage;
    
        // Attach pagination data to the request object
        req.pagination = {
                currentPage: pageNumber,
                perPage,
                skip,
                sortField
        };
    
        next();
    };
  };

  export default paginationMiddleware;