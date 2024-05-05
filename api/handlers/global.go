package handlers

import "database/sql"

func isNoRows(err error) bool {
	if err == nil {
		return false
	}

	return err == sql.ErrNoRows
}
