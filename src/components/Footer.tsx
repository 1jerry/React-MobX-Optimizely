import React from "react"

export default function Footer({ remaining, total }) {
  return (
    <p data-testid="footer">
      {remaining} / {total} left
    </p>
  )
}


