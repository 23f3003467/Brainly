import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            userid?: string;
        }
    }
}
export declare const verifyToken: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=Usermiddleware.d.ts.map