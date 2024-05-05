// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: query.sql

package database

import (
	"context"
	"database/sql"
)

const createMedia = `-- name: CreateMedia :one
INSERT INTO medias (
  url, title, image, service_id
) VALUES (
  ?, ?, ?, ?
)
RETURNING id, url, title, image, service_id, created_at, updated_at, deleted_at
`

type CreateMediaParams struct {
	Url       string `json:"url"`
	Title     string `json:"title"`
	Image     string `json:"image"`
	ServiceID int64  `json:"service_id"`
}

func (q *Queries) CreateMedia(ctx context.Context, arg CreateMediaParams) (Media, error) {
	row := q.db.QueryRowContext(ctx, createMedia,
		arg.Url,
		arg.Title,
		arg.Image,
		arg.ServiceID,
	)
	var i Media
	err := row.Scan(
		&i.ID,
		&i.Url,
		&i.Title,
		&i.Image,
		&i.ServiceID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
	)
	return i, err
}

const createService = `-- name: CreateService :one
INSERT INTO services (
  name, logo
) VALUES (
  ?, ?
)
RETURNING id, name, logo, created_at, updated_at, deleted_at
`

type CreateServiceParams struct {
	Name string         `json:"name"`
	Logo sql.NullString `json:"logo"`
}

func (q *Queries) CreateService(ctx context.Context, arg CreateServiceParams) (Service, error) {
	row := q.db.QueryRowContext(ctx, createService, arg.Name, arg.Logo)
	var i Service
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Logo,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
	)
	return i, err
}

const deleteMedia = `-- name: DeleteMedia :exec
UPDATE medias
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = ?
`

func (q *Queries) DeleteMedia(ctx context.Context, id interface{}) error {
	_, err := q.db.ExecContext(ctx, deleteMedia, id)
	return err
}

const deleteService = `-- name: DeleteService :exec
UPDATE services
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = ?
`

func (q *Queries) DeleteService(ctx context.Context, id interface{}) error {
	_, err := q.db.ExecContext(ctx, deleteService, id)
	return err
}

const enableMedia = `-- name: EnableMedia :exec
UPDATE medias
SET deleted_at = NULL
WHERE id = ?
`

func (q *Queries) EnableMedia(ctx context.Context, id interface{}) error {
	_, err := q.db.ExecContext(ctx, enableMedia, id)
	return err
}

const enableService = `-- name: EnableService :exec
UPDATE services
SET deleted_at = NULL
WHERE id = ?
`

func (q *Queries) EnableService(ctx context.Context, id interface{}) error {
	_, err := q.db.ExecContext(ctx, enableService, id)
	return err
}

const getMedia = `-- name: GetMedia :one
SELECT id, url, title, image, service_id, created_at, updated_at, deleted_at FROM medias
WHERE 
  id = ? 
  AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetMedia(ctx context.Context, id interface{}) (Media, error) {
	row := q.db.QueryRowContext(ctx, getMedia, id)
	var i Media
	err := row.Scan(
		&i.ID,
		&i.Url,
		&i.Title,
		&i.Image,
		&i.ServiceID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
	)
	return i, err
}

const getService = `-- name: GetService :one
SELECT id, name, logo, created_at, updated_at, deleted_at FROM services
WHERE 
  id = ? 
  AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetService(ctx context.Context, id interface{}) (Service, error) {
	row := q.db.QueryRowContext(ctx, getService, id)
	var i Service
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Logo,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
	)
	return i, err
}

const listMedia = `-- name: ListMedia :many
SELECT id, url, title, image, service_id, created_at, updated_at, deleted_at FROM medias
WHERE 
  deleted_at IS NULL
ORDER BY title
`

func (q *Queries) ListMedia(ctx context.Context) ([]Media, error) {
	rows, err := q.db.QueryContext(ctx, listMedia)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Media
	for rows.Next() {
		var i Media
		if err := rows.Scan(
			&i.ID,
			&i.Url,
			&i.Title,
			&i.Image,
			&i.ServiceID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.DeletedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listServices = `-- name: ListServices :many
SELECT id, name, logo, created_at, updated_at, deleted_at FROM services
WHERE 
  deleted_at IS NULL
ORDER BY name
`

func (q *Queries) ListServices(ctx context.Context) ([]Service, error) {
	rows, err := q.db.QueryContext(ctx, listServices)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Service
	for rows.Next() {
		var i Service
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Logo,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.DeletedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateMedia = `-- name: UpdateMedia :exec
UPDATE medias
SET url = ?, title = ?, image = ?, service_id = ?
WHERE id = ?
`

type UpdateMediaParams struct {
	Url       string      `json:"url"`
	Title     string      `json:"title"`
	Image     string      `json:"image"`
	ServiceID int64       `json:"service_id"`
	ID        interface{} `json:"id"`
}

func (q *Queries) UpdateMedia(ctx context.Context, arg UpdateMediaParams) error {
	_, err := q.db.ExecContext(ctx, updateMedia,
		arg.Url,
		arg.Title,
		arg.Image,
		arg.ServiceID,
		arg.ID,
	)
	return err
}

const updateService = `-- name: UpdateService :exec
UPDATE services
SET name = ?, logo = ?
WHERE id = ?
`

type UpdateServiceParams struct {
	Name string         `json:"name"`
	Logo sql.NullString `json:"logo"`
	ID   interface{}    `json:"id"`
}

func (q *Queries) UpdateService(ctx context.Context, arg UpdateServiceParams) error {
	_, err := q.db.ExecContext(ctx, updateService, arg.Name, arg.Logo, arg.ID)
	return err
}