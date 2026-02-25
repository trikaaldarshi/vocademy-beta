import { Link } from "react-router-dom";

const blogs = [
  {
    slug: "editorial-vocabulary-for-ssc-upsc-banking-exams",
    title: "Editorial Vocabulary for SSC UPSC Banking Exams",
  },
  {
    slug: "daily-the-hindu-editorial-vocabulary-with-meaning",
    title: "Daily The Hindu Editorial Vocabulary",
  },
];

export default function Blog() {
  return (
    <div>
      {blogs.map((b) => (
        <Link key={b.slug} to={`/blog/${b.slug}`}>
          <h2>{b.title}</h2>
        </Link>
      ))}
    </div>
  );
}
