export function Greeting() {
  return (
    <hgroup className="px-4">
      <h1 className="text-7xl text-neutral-800 sm:text-8xl font-thin pt-32 pb-8">
        The <span className="font-bold">Funnel</span>
      </h1>
      <p className="text-base sm:text-xl/relaxed font-light text-primary/75">
        쓰고 싶은 글이 많을 때는
        <br />
        <strong className="text-primary font-extrabold">깔대기</strong>가
        필요합니다
      </p>
    </hgroup>
  );
}
