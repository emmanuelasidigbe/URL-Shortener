import { Router } from "express";
import * as urlController from "../controllers/url_controller";

const router: Router = Router();

router.get("/", urlController.renderHomepage);
router.post("/shorten", urlController.shortenUrl);
router.get("/:shortCode", urlController.redirectUrl);

export default router;
