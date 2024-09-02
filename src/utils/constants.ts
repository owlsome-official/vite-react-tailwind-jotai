// GUI Pages
export const LANDING_PATH = "/";
export const ABOUT_PATH = "/about";
export const AUTH_PATH = "/auth";

// APIs
export const API_SIGN_IN = "/api/v1/sign-in";
export const API_SIGN_OUT = "/api/v1/sign-out";
export const API_CUSTOMER = "/api/v1/customer";
export const UNPROTECTED_PATHS = [API_SIGN_IN];

// Network
export const NETWORK_ERROR_TEXT =
  "ไม่สามารถเชื่อมต่อระบบได้ กรุณาตรวจสอบเครือข่ายอินเตอร์เน็ตที่ใช้งาน";
export const EXPIRED_TOKEN_TEXT = "Token expired";
export const SUCCESS_TEXT = "บันทึกข้อมูลสำเร็จ";
export const BAD_REQUEST_TEXT =
  "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง";
export const FORBIDDEN_TEXT = "สิทธิ์การเข้าถึงข้อมูลของท่านไม่เพียงพอ";
export const NOT_FOUND_TEXT = "ไม่พบข้อมูล";
export const CONFLICT_TEXT = "คำขอถูกปฏิเสธ เนื่องจากมีคำขออยู่แล้วในระบบ";
export const SERVER_INTERNAL_ERROR_TEXT =
  "ระบบขัดข้อง กรุณาลองใหม่อีกครั้งในภายหลัง";
