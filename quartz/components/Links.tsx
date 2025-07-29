import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function MyLinks({ displayClass }: QuartzComponentProps) {
  return (
    <div className={`links-section ${displayClass ?? ""}`}>
      <h3>My External Links</h3> {/* Optional title for your section */}
      <ul>
        <li>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            My GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://www.your-blog.com" target="_blank" rel="noopener noreferrer">
            My Personal Blog
          </a>
        </li>
        <li>
          <a href="https://example.com/resource" target="_blank" rel="noopener noreferrer">
            A Favorite Resource
          </a>
        </li>
      </ul>
    </div>
  )
}

MyLinks.css = `
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
  align-items: center;
}

.links-section a:hover {
  text-decoration: underline;
  color: var(--highlight); /* Adjust hover color as needed */
}
`

export default (() => MyLinks) satisfies QuartzComponentConstructor