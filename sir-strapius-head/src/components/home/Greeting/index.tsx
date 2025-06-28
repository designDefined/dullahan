export function Greeting() {
  return (
    <hgroup className="px-4">
      <h1 className="pb-8 pt-32 text-7xl font-thin text-neutral-800 sm:text-8xl">
        The <span className="font-bold">Funnel</span>
      </h1>
      <p className="text-primary/75 text-base font-light sm:text-xl/relaxed">
        쓰고 싶은 글이 많을 때는
        <br />
        <strong className="text-primary font-extrabold">깔대기</strong>가
        필요합니다
      </p>
    </hgroup>
  );
}
