import { Request, Response } from "express";
import * as urlModel from "../models/url_model";
import {isURL} from "validator"


export function renderHomepage(req: Request, res: Response) {
  res.render("index",{data:urlModel.getRecentUrls()});
}



export const shortenUrl = (req: Request, res: Response): void => {
  const longUrl: string = req.body.longUrl;

  // Validate the URL
  if (!isURL(longUrl)) {
   
   res.status(404).render("error", { message: "Invalid url" });
    return;
  }

  // Generate a random 6-character short code
  const shortCode: string = Math.random().toString(36).substr(2, 6);

  // Save the mapping
  urlModel.saveUrl(shortCode, longUrl);

  res.redirect("/");
};

// Handle redirection
export const redirectUrl = (req: Request, res: Response): void => {
  const shortCode: string = req.params.shortCode;
  const longUrl = urlModel.findUrl(shortCode);

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).render('error', { message: 'Short code not found.' });
  }
};