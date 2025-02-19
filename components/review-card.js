export default function ReviewCard({ view }) {
  if (!view) return null;

  console.log(view);

  return (
    <div>
      <div>
        <p>{view.name}</p>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
