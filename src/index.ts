const terminalImage = require("terminal-image")
import * as got from "got"

/**
 * Get string for terminal output from image file
 * @param path Path to file
 */
export const fromFile = async (path: string) => {
  return terminalImage.file(path)
}

/**
 * Get string for terminal output from image url
 * @param url URL of the image file
 */
export const fromURL = async (url: string) => {
  const response = await got.get(url, { encoding: null })
  return terminalImage.buffer(response.body)
}
