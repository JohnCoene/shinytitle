.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "shinytitle-assets", 
    system.file("assets", package = "shinytitle")
  )
}