terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "6.8.0"
    }
  }
}

locals {
  main_region = "us-central1"
  main_zone = "us-central1-c"
}

provider "google" {
  project = "<PROJECT_ID>"
  region  = locals.main_region
  zone    = locals.main_zone
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}
