resource "google_cloud_run_v2_service" "main" {
  name     = "cloudrun-service-${var.env}"
  location = var.main_region
  deletion_protection = false
  ingress = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      image = data.google_artifact_registry_docker_image.main.self_link
    }
  }
}