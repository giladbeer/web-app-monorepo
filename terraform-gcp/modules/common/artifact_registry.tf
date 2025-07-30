resource "google_artifact_registry_repository" "main" {
  location      = var.main_region
  repository_id = "my-repository"
  description   = "example docker repository"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}

data "google_artifact_registry_docker_image" "main" {
  location      = google_artifact_registry_repository.main.location
  repository_id = google_artifact_registry_repository.main.repository_id
  image_name    = "my-image:my-tag"
}