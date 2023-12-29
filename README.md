

# Recharge Plan API

## Overview
The Recharge Plan API provides a simple interface to fetch details of recharge plans based on specified operator and circle parameters.

## API Endpoint
- Base URL: `https://recharge-plan-api.onrender.com/api/v1/recharge/plan`
- Endpoint: `/api/v1/recharge/plan?operator={operator_name}&circle={circle_name}`

## Functionality
- **GET** `/api/v1/recharge/plan`
  - Retrieves recharge plans based on specified operator and circle.
  - Query Parameters:
    - `operator`: (Required) Name of the telecom operator (e.g., jio, vi, bsnl, airtel).
    - `circle`: (Required) Name of the circle (e.g., andhra-pradesh, bihar-jharkhand, delhi, gujarat, etc.).

## Supported Operators
- Jio
- Vi (Vodafone Idea)
- BSNL
- Airtel

## Supported Circles (States of India)
- Andhra Pradesh
- Arunachal Pradesh
- Assam
- Bihar
- Chhattisgarh
- Goa
- Gujarat
- Haryana
- Himachal Pradesh
- Jharkhand
- Karnataka
- Kerala
- Madhya Pradesh
- Maharashtra
- Manipur
- Meghalaya
- Mizoram
- Nagaland
- Odisha
- Punjab
- Rajasthan
- Sikkim
- Tamil Nadu
- Telangana
- Tripura
- Uttar Pradesh
- Uttarakhand
- West Bengal
- Andaman and Nicobar Islands
- Chandigarh
- Dadra and Nagar Haveli and Daman and Diu
- Delhi
- Jammu and Kashmir
- Ladakh
- Lakshadweep
- Puducherry

## How to Use
1. **Fetching Recharge Plans**
    - Send a GET request to the endpoint: `/api/v1/recharge/plan?operator={operator_name}&circle={circle_name}`
    - Replace `{operator_name}` with the desired operator (e.g., jio, vi, bsnl, airtel).
    - Replace `{circle_name}` with the desired circle (e.g., andhra-pradesh, bihar-jharkhand, delhi, gujarat, etc.).

2. **Response**
    - The API will respond with details of available recharge plans for the specified operator and circle in JSON format.

## Error Handling
- If required query parameters are missing or if an invalid operator or circle is specified, the API will return an appropriate error response.

## Response Format
- The API response will contain detailed information about the recharge plans, including plan IDs, operator, validity, price, and description.

## Example
### Request
```http
GET /api/v1/recharge/plan?operator=vi&circle=bihar-jharkhand HTTP/1.1
Host: 127.0.0.1:4000
```

### Response
```json
{
  "_id": "658e0673bab18001f01b33f1",
  "operator": "vi",
  "validity": "Validity : N.A.",
  "price": "₹ 10",
  "description": "Talktime: Rs.7.47 | Talktime Validity Unrestricted, No service validity available with this talktime pack",
  "__v": 0
}
```

---

