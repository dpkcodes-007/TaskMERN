import React, { useEffect, useRef } from 'react'

const Scroll = () => {
    const home = useRef()
    const abt = useRef()
    const process = useRef()
    const scroll  = useRef()

    const homeref = useRef()
    const abtref = useRef()
    const processref = useRef()
    const scrollref = useRef()

    const handleclick = ()=>{
      homeref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

    const abtclick = ()=>{
      abtref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

    const proclick = ()=>{
      processref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

    const scrollclick = ()=>{
      scrollref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }
    
    const top = ()=>{
      window.scrollTo({   
        top:0,
        behavior:"smooth"
      })
    }

    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center space-x-4 py-4">
                <button 
                  ref={home} 
                  onClick={handleclick}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105 shadow-md"
                >
                  HOME
                </button>
                <button 
                  ref={abt} 
                  onClick={abtclick}
                  className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 transform hover:scale-105 shadow-md"
                >
                  ABOUT
                </button>
                <button 
                  ref={process} 
                  onClick={proclick}
                  className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 transform hover:scale-105 shadow-md"
                >
                  PROCESS
                </button>
                <button 
                  ref={scroll} 
                  onClick={scrollclick}
                  className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-200 transform hover:scale-105 shadow-md"
                >
                  SCROLL
                </button>
              </div>
            </div>
          </div>

        
          <div className="container mx-auto px-4 py-8">
            <section ref={homeref} className="mb-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h1 className="text-4xl font-bold text-blue-600 mb-6 border-b-4 border-blue-200 pb-3">Home</h1>
              <p className="text-gray-700 leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa non obcaecati tenetur fugiat itaque illo, deserunt quis voluptates, magni amet quisquam deleniti aut, cupiditate minus. Voluptatum sed sapiente esse ullam?
              Eos quas neque cupiditate autem non, error ipsam odit facilis omnis, molestias tenetur modi amet consequuntur quasi. Corporis vero sunt tempore ex exercitationem! Vitae blanditiis quaerat eaque, hic aspernatur aliquid?
              Et consectetur voluptatem, deleniti dolore aperiam hic ducimus rerum vero ea eligendi dolorem quasi amet, tenetur soluta voluptates a laudantium nulla aut, quia optio eum explicabo. Minima dignissimos eius praesentium.
              Sit veritatis accusantium repellendus, odit vero ipsa distinctio, corrupti quibusdam quas porro fugit culpa explicabo consequuntur aspernatur? Dignissimos sapiente laboriosam at ut quas consequuntur repellendus commodi deserunt iure, vitae cupiditate!
              Ratione asperiores et possimus voluptate ab impedit deserunt, magnam, omnis odit atque sed mollitia labore nihil quidem doloribus dicta, excepturi delectus nostrum voluptatem obcaecati. Facilis, incidunt! Architecto doloribus officiis quia!
              Eveniet beatae, cum non, reiciendis enim quo perferendis hic numquam modi consectetur cumque quasi velit voluptates rerum nihil tempore exercitationem error quae et culpa nam nostrum fugit itaque? Ad, animi.
              Id itaque velit atque dolorem culpa aliquam. Facilis, doloribus? Delectus officiis eaque tempore dicta, eos maiores esse deserunt iusto quas ut accusantium earum veritatis enim, eveniet facilis atque hic rerum.
              Vel, temporibus exercitationem aliquam error iste possimus voluptate quas iusto in, officiis quaerat soluta eaque dolores facilis rem illum ipsa nam hic! Hic fuga doloremque excepturi ducimus rem dolor optio!
              Facilis expedita enim aliquid nemo, laborum sequi dolor blanditiis consequuntur! Corporis doloribus earum placeat odio ut quo natus voluptatem, amet mollitia! Architecto, commodi non? Suscipit voluptatem in iusto tempora illo?
              Ullam voluptas optio placeat, obcaecati cumque quis accusamus tempora sequi accusantium reprehenderit repudiandae dicta, quae esse molestias eveniet. Nam autem labore ratione perspiciatis facilis consectetur vitae qui, nesciunt quisquam mollitia.
              Voluptate, expedita vero! Eligendi sequi omnis eius et, voluptate molestiae? Reprehenderit in, illum, qui nisi hic earum aperiam tenetur cupiditate beatae itaque voluptas quis numquam repudiandae. Maxime similique corrupti debitis!
              Voluptatum atque fugit quam consequatur et autem repudiandae odit soluta accusamus illo aliquid illum laboriosam perferendis maiores, consequuntur quo libero nobis molestias animi recusandae reprehenderit, vero nulla? Aspernatur, quo blanditiis!
              Delectus laboriosam provident rerum cumque praesentium exercitationem repellat soluta odit, assumenda aliquid veniam consectetur adipisci distinctio nobis deserunt nemo ullam voluptate nam dicta dolores quibusdam qui voluptatibus esse. Consequuntur, voluptatibus?
              Similique asperiores rem inventore tempora? Nulla explicabo sunt eum. Alias vero culpa aperiam harum accusamus repellat, magni iste quis. Est aut eos officia veniam officiis. Modi, temporibus consectetur! Inventore, facere.
              Nam, fugiat deserunt, delectus labore, iure quo repudiandae perferendis consectetur est numquam neque molestiae? Voluptates commodi ipsum deserunt illo, suscipit quia tempora ipsa similique consectetur quidem non delectus voluptas ea!
              Obcaecati distinctio consequuntur ut, ad sed recusandae adipisci nihil dignissimos qui quos veniam eaque illo beatae quasi impedit esse deleniti molestiae inventore error aperiam dolore explicabo consequatur fugit at? Nihil!
              Ex unde saepe iusto soluta neque hic veritatis aperiam, dolore iste. Repudiandae possimus quis at maxime sequi? Saepe, corporis libero. Iure aut, repellendus consequatur voluptate placeat quo totam esse blanditiis!
              Provident reprehenderit accusantium repudiandae quas harum atque facilis quam dolorum porro non eius similique, sint optio perspiciatis inventore ducimus. Sit fugiat sequi animi sed voluptas? Ipsam rerum sapiente esse qui.
              Officia esse sequi aperiam, quidem iusto vel! Aperiam ipsam animi sunt magnam vel officiis asperiores repellat velit quod fugit est, fuga impedit deserunt quia maiores, in sit corrupti deleniti soluta?
              Eaque doloribus id perferendis error iusto cum sit deserunt debitis! Dolor repudiandae, debitis nulla velit quae, maxime mollitia amet excepturi qui quidem, incidunt deleniti asperiores quod illum nihil nisi aspernatur!
              Quaerat, delectus! Ipsam dolorem esse consectetur reprehenderit doloremque cum illum autem, dolore necessitatibus consequatur voluptate repellat repellendus explicabo illo incidunt soluta ipsum. Non sunt labore tenetur doloribus saepe perferendis in.
              Blanditiis eius ipsa magnam, incidunt reprehenderit quibusdam alias, accusantium, et nisi perspiciatis ex eveniet magni asperiores tempore voluptate distinctio perferendis fuga sequi soluta repellat sit corrupti optio pariatur veritatis! Libero!
              Obcaecati eius fugit voluptatem corporis harum culpa autem sed ratione alias maiores ex eum qui, beatae sunt excepturi eligendi! Inventore aut debitis iure magnam illo ipsa delectus a dolor natus?
              Obcaecati voluptas sunt hic minima possimus quis reiciendis, rerum fugiat eum ipsum quisquam iusto quaerat autem facere dignissimos tempore aperiam praesentium sequi? Vitae, deleniti minima est vel quis mollitia. Sapiente!
              Voluptatem dicta magnam ab ea ipsum eum, dignissimos laborum maiores modi? Nulla aliquid veniam ad est magni. Itaque, neque consectetur quidem ratione rem perferendis nulla provident obcaecati consequuntur a! Animi.
              Cum quos exercitationem corrupti explicabo numquam est saepe unde cupiditate aut deleniti ipsa voluptas architecto vel, facilis deserunt, quasi itaque! Totam et tenetur fuga recusandae perferendis illo culpa molestiae voluptas?
              Porro architecto accusamus modi excepturi voluptatem quia tenetur ab! Aliquam sapiente temporibus earum ex, perspiciatis enim commodi numquam impedit eum vero quis consectetur totam facilis? Necessitatibus rerum illum reprehenderit officia.
              Dolore nam explicabo odio, quisquam non itaque aut ad voluptatem, rem libero reiciendis eveniet commodi ab accusamus obcaecati sit? Blanditiis nulla nesciunt eum voluptatem sint iusto consequuntur maiores quas veniam.
              Voluptatem porro voluptas sit eius asperiores veniam esse quae nesciunt molestias, expedita ratione soluta quod modi hic et vitae nostrum at rerum ipsa nisi. Aperiam, eligendi? Sapiente sunt culpa animi!
              Minus atque eius architecto, explicabo numquam, ipsa odit, eveniet temporibus dignissimos placeat fugit reiciendis neque. Minima harum repellendus minus, animi, vel quasi perferendis aspernatur delectus neque officiis, nisi officia placeat!</p>
            </section>

            <section ref={abtref} className="mb-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h1 className="text-4xl font-bold text-green-600 mb-6 border-b-4 border-green-200 pb-3">About</h1>
              <p className="text-gray-700 leading-relaxed text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque accusamus provident eveniet nemo praesentium iure, magnam odit eos adipisci aspernatur omnis, culpa nihil veniam laudantium non at architecto totam.
              Iusto expedita consectetur, eaque nam eum similique vero mollitia incidunt consequatur repellendus perferendis hic autem vitae laborum distinctio nihil, repudiandae neque doloremque tempora cupiditate possimus dolore rem assumenda voluptatibus! Amet?
              Porro quasi libero earum commodi quia culpa pariatur fuga corporis nesciunt placeat? Alias hic iure vitae, dolorum enim sunt quisquam dolore architecto quasi velit perferendis delectus repellendus quas saepe in!
              Eveniet adipisci sequi veritatis ab iste voluptatem expedita consequatur sapiente voluptate. Minima placeat quidem quasi id inventore fugit similique quae sed doloribus. Dolores consequatur sapiente autem, sequi necessitatibus exercitationem odio.
              Minima repudiandae beatae eum at aliquam necessitatibus, hic commodi asperiores tempora blanditiis iusto. Dolorem, voluptatibus magni, aperiam asperiores ad vitae facere magnam, reprehenderit a quisquam similique excepturi impedit tenetur architecto?
              Odit error doloribus odio eum maxime dicta! Aliquam sit illo consectetur explicabo cupiditate asperiores similique dolorum architecto dolorem quidem delectus, tenetur neque facilis voluptate quos hic molestias temporibus quis! Cumque?
              Ad qui cum minus fuga ipsam voluptates laudantium beatae, voluptatum iure facilis mollitia? Laborum repudiandae praesentium eos est adipisci. Ducimus aliquam deserunt, itaque ratione esse non totam magnam aperiam. Totam!
              Odit enim dignissimos eaque, repudiandae quos porro consequatur molestiae modi maxime itaque asperiores minima error aliquid consectetur ullam minus perferendis quis? Quisquam harum optio cum adipisci sapiente consectetur perspiciatis corrupti.
              Incidunt rerum esse nam. Quaerat adipisci cum expedita mollitia itaque ad beatae dolorum ullam esse, illum soluta voluptatibus. Dolorem quas deserunt nisi quasi consequatur sequi, esse repudiandae illum minima alias?
              Cum quibusdam voluptas nam tempora nesciunt accusantium vero dolorem quam quos consequatur libero praesentium iure nostrum et fugit, temporibus ipsum expedita. Sapiente ut possimus quisquam, tenetur reiciendis ullam alias eos.
              Odio, accusantium provident quod maxime assumenda tempora tempore similique explicabo minima dolorum, cumque perspiciatis neque amet, esse non et iste distinctio. Voluptates excepturi non dolores vel, adipisci enim consequuntur beatae.
              Minima repellendus cupiditate, expedita nemo dolore hic mollitia eligendi odit similique, voluptas, dolorem dolor voluptatibus atque iusto ipsam. Tempora minima nesciunt voluptatem neque illo eligendi velit nemo ex molestias eius?
              Similique, ea aspernatur, qui laudantium, sequi eius magnam maxime quae dolore dignissimos recusandae excepturi! Ea minima eligendi corporis, maiores asperiores porro! Sed, quasi facilis molestiae tempora repellendus blanditiis nihil porro.
              Impedit exercitationem eos nihil possimus doloremque sequi qui quidem quibusdam cum fuga non consequuntur aut quis eveniet veritatis ut perspiciatis, repudiandae odit, dolore mollitia quae ipsum numquam accusamus eligendi! A!
              Repudiandae autem dolor rerum atque quia blanditiis sequi repellendus, fugit eveniet voluptates deserunt voluptas tenetur tempore ad impedit eum cumque nam velit. Rem consequatur optio, aliquid quo dolorem quisquam magnam.
              Error neque incidunt quaerat numquam delectus deleniti quidem ipsa, inventore laudantium qui doloremque cumque nam at? Recusandae adipisci earum repudiandae consequuntur, molestiae possimus nobis doloribus ut sapiente eligendi asperiores tenetur!
              Magnam expedita vero, mollitia recusandae nostrum sapiente adipisci error earum, omnis quidem praesentium ea veniam, tempore libero impedit iste dolor natus a voluptatem magni? Hic incidunt quaerat rerum vero! Tempore!
              Soluta nostrum sunt, veritatis ab saepe voluptate culpa iste excepturi, ex pariatur est nobis officia quas expedita ratione numquam molestias aliquid libero debitis quasi? Provident porro sit repellendus assumenda debitis.
              Placeat quis ducimus tempore numquam, ut iusto illo. Laborum officia similique earum eveniet fugiat vitae quisquam dolor alias sint mollitia nihil omnis iure dolore incidunt doloribus, accusantium, dolorum nobis cumque?
              Doloribus mollitia consequatur, odit neque at deleniti rem sit dolores repudiandae voluptatum, impedit, maxime reiciendis. Aspernatur consequatur ipsam ducimus sed! Quaerat in cupiditate voluptas laborum eum suscipit voluptate dolore expedita!
              Ipsam, non dignissimos? Esse voluptatem quas est perferendis quaerat laboriosam, accusantium provident eum tempore omnis incidunt deserunt ipsam ex veritatis maxime velit error officia expedita aliquid facere quibusdam nam? Possimus?
              Sunt tenetur odit quia eos inventore vel libero ipsam quam ratione vero aspernatur maxime eum possimus consectetur aliquam facilis nulla, sint laudantium at? Totam ex, reprehenderit dolores quo excepturi laboriosam!
              Nostrum tenetur pariatur voluptates quaerat reiciendis consectetur alias aut temporibus neque, deserunt voluptatum laboriosam consequuntur dolor velit doloribus saepe. Eveniet quis, obcaecati voluptatibus nisi fuga doloribus voluptas esse rem distinctio.
              Ullam, vero fuga ipsum eveniet recusandae sunt voluptate quasi enim a cumque ipsa eum nisi ut omnis aliquid, ducimus, mollitia libero voluptatum voluptatibus. Eos molestiae a aliquam. Neque, quidem incidunt.
              Incidunt, et porro impedit odit, omnis minima nam facere provident tempore reiciendis, voluptas nesciunt dolore aliquam sapiente eum eos nulla ad ipsa. Laudantium sequi voluptatum sed provident unde consequatur quidem!
              Quam expedita sed ducimus explicabo rem officiis, cupiditate quae. Quas magnam aut molestias, minus earum dolores incidunt praesentium aliquam obcaecati possimus? Praesentium molestias commodi quisquam facilis numquam aut est doloribus!
              Nostrum officiis impedit quae dicta rerum facere rem, odio, exercitationem in perspiciatis vitae iusto error iste. Nihil repellat, praesentium corporis, nulla omnis voluptates ipsa labore blanditiis aspernatur cum obcaecati error!
              Ipsa dolorem est dolor praesentium necessitatibus facilis, nesciunt accusantium distinctio doloremque ex? Eos voluptas iusto excepturi ab maxime officiis, nisi, cum incidunt quo, dolor voluptatum nostrum tempora cumque esse facilis?
              Animi officia quibusdam aliquam odio enim, veritatis fugit accusantium itaque magnam non voluptatum id consequuntur quidem suscipit ducimus eveniet, explicabo nostrum ullam laborum neque veniam quos. Facilis quasi voluptate exercitationem?
              Maxime, at adipisci! Blanditiis adipisci amet veritatis magni perferendis, quaerat unde! Cum, laboriosam optio perspiciatis natus, ut eveniet quisquam magni illum ipsum repudiandae id. Pariatur omnis ullam quod aliquid consequuntur? </p>
            </section>

            <section ref={processref} className="mb-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h1 className="text-4xl font-bold text-purple-600 mb-6 border-b-4 border-purple-200 pb-3">Process</h1>
              <p className="text-gray-700 leading-relaxed text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est quia nemo magni libero, velit possimus dignissimos, aut non repudiandae perferendis error. Eum repellendus qui non itaque sequi! Aut, accusantium.
              Consectetur amet eaque natus, error numquam minus quo fugit voluptate beatae assumenda, accusantium possimus tempora cum corrupti! Nostrum dicta aperiam optio itaque hic ab quidem dolor nemo! Nobis, facilis impedit.
              Quia autem sit voluptatem aliquam distinctio numquam odio, ex dolor? Facere impedit architecto magnam illo omnis nesciunt neque voluptatibus similique amet, officia cum suscipit pariatur atque? Ratione similique corporis aperiam?
              Distinctio, dolorem veritatis. Pariatur quaerat facere rem provident tempora tenetur adipisci ipsa, est maiores deleniti neque quo iste enim eum error autem sint facilis earum, accusamus aliquid. Tempore, at qui.
              Tenetur ipsa repellat facilis ad aut deleniti sequi delectus ducimus! Officia minima ex velit, reprehenderit asperiores possimus aliquid quos quibusdam culpa, facilis at ea necessitatibus, aliquam doloribus iusto laboriosam eum.
              Officia ullam itaque sint sapiente illum incidunt ipsam, corporis quod, quas quia maxime sit iusto saepe soluta nostrum nulla repudiandae maiores atque sed facilis quaerat recusandae ratione eum ut? Ipsum?
              Voluptatibus sapiente omnis voluptate voluptatem alias reiciendis consectetur optio ipsa, architecto aliquid esse ex, minus eaque quas quidem illum perferendis fugit, provident nulla aut libero sed ab? Voluptatibus, quo itaque.
              Accusantium nulla ea rerum soluta repellendus, fugit provident fuga voluptatum incidunt assumenda. Ullam vitae perferendis maiores aliquid nulla porro voluptatibus laboriosam, est consequatur similique, quos explicabo vel fuga optio at?
              Accusamus, quidem magni? Nam praesentium porro laboriosam quod earum sapiente, quis excepturi totam harum rerum magnam similique doloremque aperiam, debitis doloribus? Ea perferendis quis explicabo. Dolore non quia quam reiciendis.
              Esse laborum ipsam magnam cum sapiente minus perspiciatis distinctio quam earum unde fugit possimus illo repudiandae quasi, eveniet dolor? Accusantium, dignissimos quia. Ipsam deserunt eius vero dolores pariatur autem? Fuga.
              Vel, provident harum. Modi inventore suscipit nobis? Quasi itaque neque, vitae laboriosam porro eligendi placeat dicta totam, expedita adipisci optio hic iste dignissimos eius cupiditate illo asperiores quis dolorem ad.
              Dicta enim voluptates sint. Quos neque harum minima voluptatibus soluta est dolore, quo dolor, ipsa quaerat unde qui aut hic! Soluta quos labore adipisci perferendis optio et iste recusandae dolor.
              Vel cumque deleniti sapiente ut deserunt numquam, qui excepturi porro cum nisi quisquam officiis vero, atque, provident architecto laboriosam eveniet explicabo distinctio. Ducimus quas qui ab tenetur dolor corrupti cupiditate!
              Debitis unde fugiat dignissimos? Ab eum doloribus laborum esse veniam atque tenetur molestiae eveniet quisquam suscipit, repellat ut, et quaerat officiis aspernatur cumque dignissimos. Alias explicabo aut assumenda adipisci laudantium?
              Illo voluptas distinctio facere aut doloremque laboriosam at cumque. Odio et doloremque ab sed dolores assumenda modi nostrum nobis explicabo, quisquam dolorem est. Molestias quibusdam tempore dolorem in inventore ratione?
              Atque consectetur impedit quisquam, dignissimos veritatis amet. Commodi deleniti possimus repellat, vero obcaecati perspiciatis blanditiis laboriosam quas accusantium hic dignissimos perferendis voluptatibus ab et natus pariatur velit, laborum rem nostrum.
              Esse eos eum quasi blanditiis, ullam dolorem rerum commodi, eius, impedit mollitia obcaecati nihil dolorum ipsum cumque fuga aperiam illum. Veritatis, nihil unde a at provident tempore aliquid reprehenderit nulla.
              Inventore, minima et ad dolorem totam voluptatibus deleniti distinctio nemo iure quidem sint, aperiam autem similique laboriosam quasi. Quibusdam, quis reprehenderit incidunt similique nostrum expedita consequatur laudantium error tempore ducimus?
              Provident dolore omnis accusantium nisi nobis autem. Provident, quis, beatae maiores magni accusamus ullam labore, voluptates voluptate numquam neque quaerat autem suscipit. Enim voluptatibus architecto, ea natus placeat ipsam officiis.
              Cumque perferendis, laborum alias deserunt temporibus nihil molestias tenetur. Libero harum ratione vero numquam deleniti esse perferendis, nulla delectus rerum neque nostrum, natus, blanditiis voluptatem veniam accusantium alias provident facilis.
              Ratione quo commodi voluptatum quae impedit voluptas id natus ea, accusantium quos maiores. Quidem perspiciatis neque quisquam quasi quod asperiores corporis voluptatibus harum, aspernatur ullam quaerat ducimus deserunt, recusandae eum.
              Animi vero reprehenderit adipisci porro. Aliquid dolorem sit quis pariatur assumenda, id illo quidem minus temporibus molestiae minima illum non explicabo, ex obcaecati facilis quae ullam eum, praesentium quibusdam est!
              Autem vitae reprehenderit quos voluptas, explicabo tempora molestiae laudantium. Dolore numquam nostrum, vel tenetur possimus tempora veniam aut quos incidunt, rerum eos explicabo exercitationem a dicta, autem veritatis reprehenderit ab.
              Sit sapiente reprehenderit sunt eius aut nemo praesentium culpa. Eveniet dolore officia sint libero odit, accusantium tenetur impedit dolorem ipsa odio repellat iusto ea corrupti minima fugit harum unde eum.
              Consectetur, recusandae non aperiam voluptatem inventore neque quasi! Nemo maxime accusantium harum eaque, odit non officiis quos error assumenda nihil deserunt, a ullam voluptatum perspiciatis at, maiores hic ipsa quod.
              Reprehenderit odit soluta itaque nemo iusto corrupti cumque error inventore eveniet consequuntur. Sed recusandae excepturi voluptatem aperiam! Quo libero explicabo exercitationem distinctio, debitis inventore, pariatur nulla impedit recusandae repudiandae neque?
              Quisquam ipsam exercitationem harum. Iste alias, saepe dolorum explicabo facilis accusamus deleniti rem, sapiente animi fugiat corrupti! Eveniet dolorum voluptate, veritatis officiis amet nesciunt deleniti accusantium eius cum corrupti repellendus?
              Iste, ratione numquam tempora minus asperiores aut veritatis? Rerum dolorem nostrum, sit veniam harum esse quam perspiciatis, nihil hic ratione quia error quae perferendis, ducimus iste provident praesentium. Ducimus, perspiciatis.
              Aliquid labore asperiores dolores illo voluptate, voluptas doloribus quos praesentium! Impedit praesentium eaque nobis asperiores repellat voluptatum ullam blanditiis et saepe atque modi commodi, nemo consequatur sint tenetur quis quas?
              Libero neque suscipit itaque maiores ratione natus nihil tenetur ipsa laborum ea. Esse quaerat dolorem veritatis reprehenderit aperiam consequuntur, velit soluta. Natus voluptate officia voluptatibus veniam, sint distinctio architecto asperiores!</p>
            </section>

            <section ref={scrollref} className="mb-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h1 className="text-4xl font-bold text-pink-600 mb-6 border-b-4 border-pink-200 pb-3">Scroll</h1>
              <p className="text-gray-700 leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus consectetur veritatis corrupti deleniti nihil incidunt, aut quasi, minima vel assumenda quas porro accusamus voluptatem eaque rerum in dicta praesentium.
              Sit deserunt ratione minus omnis totam, fugiat ipsa at quos delectus tempora porro. Earum sapiente illo sequi accusamus, reprehenderit voluptatem, nesciunt recusandae autem dolore ducimus quo id magnam amet expedita.
              Dignissimos deserunt tempora deleniti illo aliquam nisi provident esse itaque porro mollitia praesentium, consequuntur distinctio quae. Rerum, neque facere. Ad dicta dolore ut pariatur reprehenderit blanditiis nam vel aliquid odit?
              Quasi corporis, atque, sint eos enim esse est molestiae eum provident veritatis ipsam non libero nulla qui. A, saepe maxime iste, fuga odit nihil cupiditate debitis doloremque ipsam laudantium natus!
              Expedita et, magni ipsa esse deleniti earum. Magnam temporibus architecto dignissimos maxime odio reiciendis, sapiente pariatur suscipit officiis laudantium autem id minima facilis dolorem harum rem perferendis unde. Ea, ab!
              Sunt voluptatum facilis nobis eius neque ullam! Quas sed tempora ratione sit praesentium ab sunt, aperiam error a vero ad velit quia officia quos, molestiae harum architecto laudantium dicta reiciendis.
              Quod aspernatur officiis impedit qui sapiente necessitatibus quaerat modi tempore, ratione dignissimos, eligendi similique magni nesciunt. Temporibus, voluptatum! Optio tenetur sapiente animi quibusdam blanditiis officiis pariatur exercitationem consequatur dignissimos autem.
              Sunt doloremque voluptatum nisi eveniet expedita voluptates nobis pariatur nemo autem culpa? Hic molestias labore, aliquid quidem placeat mollitia ab quibusdam necessitatibus esse id alias fugiat expedita doloribus nemo autem!
              Facere aperiam minus atque rem dicta nobis ut blanditiis dolorem repellat ratione officiis perferendis veniam nam, repellendus distinctio provident temporibus sapiente quo consequatur accusantium cum? Natus quisquam minus eos repellendus!
              Ratione, sed velit! Voluptatibus voluptatum porro libero sint. Adipisci id alias vitae culpa aperiam harum quo, officia magni doloremque itaque dignissimos, at saepe. Dolorum pariatur ducimus perferendis, hic laboriosam autem.
              Blanditiis sit, quae voluptatibus facilis nobis in impedit? Quod, dolorum nostrum assumenda praesentium et molestias sequi delectus nulla consequatur aperiam distinctio explicabo aut? Consectetur blanditiis sit ullam omnis fugiat. Ipsa!
              Repudiandae nobis libero corporis iste, quibusdam fugiat voluptas. Dolor impedit reiciendis cumque excepturi magnam maxime illo ipsam esse nemo, cupiditate quae? Quam nesciunt illum perferendis placeat modi non tempore officia.
              Nesciunt dolore tenetur animi quidem maxime cupiditate, nulla blanditiis ad repudiandae vero voluptatum cumque placeat magni doloribus, reiciendis fugit earum fuga incidunt id quia pariatur. Pariatur excepturi optio voluptas accusamus.
              Culpa nulla nesciunt necessitatibus aliquid amet voluptas. Excepturi est consectetur ratione laudantium labore expedita magnam, voluptates dolor deleniti molestiae incidunt fugiat id nobis adipisci officiis architecto atque at beatae saepe.
              Qui, magnam aut aperiam dolores libero non odio ratione porro dignissimos natus inventore atque corrupti perspiciatis neque officia nemo quidem quia quas. Quibusdam enim aliquid doloremque, mollitia suscipit cum asperiores?
              Nemo voluptas rerum adipisci explicabo modi sit alias molestiae error sint. Provident magni amet, voluptates eos ipsum autem pariatur incidunt doloremque ad fugiat ex quos ipsam at sapiente reiciendis harum?
              Accusantium veniam quasi reprehenderit similique adipisci quod ducimus assumenda consequatur maiores officia atque neque recusandae dolorem soluta doloremque voluptatem architecto, quaerat officiis excepturi illo omnis! Nemo molestiae debitis perferendis voluptate!
              Quibusdam labore perferendis, error consequatur saepe non explicabo, optio incidunt pariatur laudantium aliquam atque. Eius velit doloremque praesentium, eos, voluptas possimus repudiandae ad eaque ducimus, odit sed corporis dolorem aspernatur.
              Facere eligendi sequi quisquam, autem voluptate fugiat. Numquam, recusandae. Quibusdam a sed at id itaque perspiciatis, omnis in ipsa tenetur debitis ducimus vitae provident earum natus, voluptatum cumque soluta minima.
              Enim veritatis odio quia, illum distinctio voluptatum adipisci molestiae sapiente voluptatibus, aut, architecto illo quaerat animi reprehenderit quis. Nemo dolorum perferendis quos unde corrupti deserunt illum laborum omnis earum iusto?
              Dolor magnam inventore quisquam magni quam ipsum necessitatibus eligendi quae consequuntur, distinctio ipsam suscipit dolorem itaque ab excepturi ipsa voluptatum illum, doloribus explicabo mollitia nemo vero. Quo nostrum delectus exercitationem?
              Quas dolor repellendus quod, corrupti odio iure reprehenderit, iusto asperiores neque error est perspiciatis illum possimus autem. Incidunt ducimus non maiores quam animi, molestiae perspiciatis perferendis ex, exercitationem ut temporibus.
              Eius distinctio, asperiores aliquid impedit iusto harum neque molestias placeat id quod sint magnam quisquam illum recusandae perferendis natus repellat quam? Rerum tempore at numquam qui molestiae, est voluptatibus laboriosam.
              Possimus quam blanditiis, laboriosam voluptas ad reprehenderit incidunt est architecto nostrum neque eos ab, culpa quisquam dolore deleniti tenetur voluptate necessitatibus dolorum nam in fugiat. Dolore aliquam porro deleniti beatae.
              Expedita ipsum recusandae explicabo cupiditate voluptates? Aspernatur eos expedita facere nobis autem temporibus vero, voluptatum ratione, aperiam voluptate harum, incidunt modi tenetur nulla adipisci! Voluptatibus a ab accusamus beatae eos?
              Voluptatibus sequi libero ullam laudantium. Dicta fugit, et sint adipisci molestias omnis similique iste eaque cum pariatur excepturi, impedit illo vel iusto eos repudiandae eius magni id repellendus modi nam.
              Magni dolore explicabo optio, eum magnam non ipsa minus assumenda accusamus deserunt molestiae natus quasi. Iusto sed harum asperiores officia, nobis odit aliquam, aperiam architecto quia delectus fugit inventore quae.
              Iste, illum, earum quas unde tempore, sequi ea laborum tempora ipsa omnis nam qui vitae error nulla quod expedita dolorum modi a? Mollitia ex ullam aliquid corporis beatae! Incidunt, amet?
              Amet atque iusto placeat ea saepe quos quidem ut eos, nihil dolor sit sed doloremque laboriosam quasi sequi voluptates incidunt. Dolorum officiis assumenda totam corrupti, voluptas consequuntur numquam deserunt earum!
              Eligendi nihil dolorum consequuntur tenetur nisi aperiam explicabo optio harum! Molestias voluptatibus quo, doloremque molestiae assumenda id eum enim vero quidem vitae quos nemo delectus rem! Ea deleniti quisquam eos?</p>
            </section>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={top}
            className="fixed bottom-8 right-8 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            ↑ Top
          </button>
        </div>
      </>
    )
}

export default Scroll