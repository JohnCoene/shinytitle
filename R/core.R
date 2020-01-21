#' Shiny Title
#' 
#' Add Shiny title to a \link[shiny]{navbarPage}.
#' 
#' @export
use_shinytitle <- function(){
  shiny::tags$script(src = "shinytitle-assets/script.js")
}