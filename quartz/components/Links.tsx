import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function MyLinks({ displayClass }: QuartzComponentProps) {
  return (
    <div className={`links-section ${displayClass ?? ""}`}>
      <h4>Archive</h4> {/* Optional title for your section */}
      <ul>
        <li>
          <a href="https://flaviogaete-info.onrender.com/portfolio" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  )
}

MyLinks.css = `
.links-section h4 {
  font-size: 1em;
  text-decoration: underline;
}

.links-section ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.links-section li {
  margin-bottom: 8px;
}

.links-section a {
  text-decoration: none;
  color: var(--dark); /* Adjust color as needed */
  display: flex;
  align-items: start;
}

.links-section a:hover {
  text-decoration: none;
  color: var(--dark); /*  Adjust hover color as needed */
}
`

export default (() => MyLinks) satisfies QuartzComponentConstructor