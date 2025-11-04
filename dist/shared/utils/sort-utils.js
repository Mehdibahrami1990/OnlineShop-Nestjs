"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortFunction = void 0;
const general_query_dto_1 = require("../dtos/general-query.dto");
const sortFunction = (sort) => {
    let sortObject = {};
    if (sort === general_query_dto_1.Sort.Title) {
        sortObject = { title: 1 };
    }
    else if (sort === general_query_dto_1.Sort.UpdatedAt) {
        sortObject = { updatedAt: -1 };
    }
    else {
        sortObject = { createdAt: -1 };
    }
    return sortObject;
};
exports.sortFunction = sortFunction;
//# sourceMappingURL=sort-utils.js.map