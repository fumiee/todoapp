const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="flex flex-col">
          <header className="mt-8 ml-4 h-32 text-gray-600 items-end text-5xl font-serif">
            料理系 YouTuber
            <img
              className="inline ml-3 mb-2 mr-2"
              src="youtube.png"
              alt="youtubeのアイコン"
            />
            まとめ
          </header>
          <p className="border-b-4 mb-9"></p>
          <div className="flex">
            <nav className="flex-col sm:max-w-60 text-1.5xl font-serif">
              <li>
                <button className="mr-8">食材で探す</button>
              </li>
              <li>
                <button className="mr-8">youtuberで探す</button>
              </li>
              <li>
                <button className="mr-8">再生回数で探す</button>
              </li>
            </nav>
            <main className="flex-1 min">
              <img className="" src="takomeshi.jpg" alt="たこめしの画像" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              minus iure corporis velit! Vitae nulla non deleniti enim atque
              accusamus, aliquid, iure optio quisquam hic facere nemo eligendi.
              Cum, itaque. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nostrum, natus. Voluptate sed, officia impedit doloribus
              eos, tempore id maiores blanditiis praesentium fuga nesciunt
              consectetur cupiditate labore, qui quaerat in iste?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nisi modi eum ipsa
              in! Quam delectus dolores harum dolorem voluptatum voluptatibus
              eum doloremque iure. Aut ea asperiores quis nemo, repellendus
              alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate soluta commodi perspiciatis hic necessitatibus dolorum
              natus minus animi eum itaque deserunt reiciendis distinctio
              voluptatem exercitationem consequatur accusamus quod, quisquam
              veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti itaque error explicabo cum praesentium, exercitationem
              optio! Quis rem odit laudantium nemo, at autem quibusdam libero
              assumenda quaerat atque voluptas odio.
            </main>
          </div>
        </div>
        <aside className="w-2/5">pr</aside>
      </div>
    </div>
  );
};

export default Home;
