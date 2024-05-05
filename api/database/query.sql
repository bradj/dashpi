-- name: GetMedia :one
SELECT * FROM medias
WHERE 
  id = ? 
  AND deleted_at IS NULL
LIMIT 1;

-- name: ListMedia :many
SELECT * FROM medias
WHERE 
  deleted_at IS NULL
ORDER BY title;

-- name: CreateMedia :one
INSERT INTO medias (
  url, title, image, service_id
) VALUES (
  ?, ?, ?, ?
)
RETURNING *;

-- name: UpdateMedia :exec
UPDATE medias
SET url = ?, title = ?, image = ?, service_id = ?
WHERE id = ?;

-- name: DeleteMedia :exec
UPDATE medias
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = ?;

-- name: EnableMedia :exec
UPDATE medias
SET deleted_at = NULL
WHERE id = ?;

-- name: GetService :one
SELECT * FROM services
WHERE 
  id = ? 
  AND deleted_at IS NULL
LIMIT 1;

-- name: ListServices :many
SELECT * FROM services
WHERE 
  deleted_at IS NULL
ORDER BY name;

-- name: CreateService :one
INSERT INTO services (
  name, logo
) VALUES (
  ?, ?
)
RETURNING *;

-- name: UpdateService :exec
UPDATE services
SET name = ?, logo = ?
WHERE id = ?;

-- name: DeleteService :exec
UPDATE services
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = ?;

-- name: EnableService :exec
UPDATE services
SET deleted_at = NULL
WHERE id = ?;
