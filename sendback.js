function isValid(success, status, result) {
    if (success) {
        return { "success": success, "status": status, "data": "Could Not Retrieve Data" }
    } else {
        return { "success": success, "status": status, "data": result }
    }
}