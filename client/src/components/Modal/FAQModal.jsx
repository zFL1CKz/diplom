import React from 'react'

import { Back } from '../Back/Back'

import img1 from '../../img/faq/1.png'
import img2 from '../../img/faq/2.png'
import img3 from '../../img/faq/3.png'

import './FAQModal.scss'

export const FAQModal = ({ active, setActive, item }) => {
  function checkTitle() {
    if (item === 1) return 'Как начать пользоваться приложением?'
    else if (item === 2) return 'Какой мотоцикл выбрать новичку?'
    else return 'Искусство управления мотоциклом'
  }

  return (
    <div className={active ? 'faq--modal active' : 'faq--modal'} onClick={() => setActive(false)}>
      <div className='faq--modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='faq--modal__group'>
          <div onClick={() => setActive(false)}>
            <Back />
          </div>
          <div className='faq--modal__title'>{checkTitle()}</div>
        </div>

        {item === 1 && (
          <div className='faq--modal__content'>
            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>1. Заполните профиль</div>
              <p>Для того, чтобы начать первую поездку, Вам необходимо заполнить персональную информацию.</p>
            </div>
            <div className='faq--modal__important'>
              <div className='faq--modal__important_title'>Важно!</div>{' '}
              <div className='faq--modal__important_text'>
                Для выезда в город или загород, Вам будут доступны только те мотоциклы, категории которых присутствуют в Вашем водительском удостоверении.
              </div>
            </div>
            <img src={img1} alt='' className='faq--modal__content_img' />

            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>2. Введите реквизиты для оплаты</div>
              <p>Это необходимо для оплаты поездок и штрафов.</p>
            </div>
            <img src={img2} alt='' className='faq--modal__content_img' />

            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>3. В путь!</div>
              <p>
                После заполнения необходимой информации, можно отправляться покорять мир двухколесной техники! Если Вы не знаете, с чего начать, читайте инструкцию №2 “Какой мотоцикл выбрать новичку?”
              </p>
            </div>
            <img src={img3} alt='' className='faq--modal__content_img' />
          </div>
        )}

        {item === 2 && (
          <div className='faq--modal__content'>
            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>1. Кубатура мотоцикла и другие технические характеристики</div>
              <p>Кубатурой называют объем двигателя. Этот показатель может достигать 2000 куб. см и во многом зависит от класса техники.</p>
            </div>
            <div className='faq--modal__important'>
              <div className='faq--modal__important_title'>Важно!</div>{' '}
              <div className='faq--modal__important_text'>
                Новичкам следует начинать с небольшой кубатуры. Если выбирать классику, то объем двигателя должен быть не более 650 куб. см. На стартовом этапе рекомендуют ограничиться 300 куб. см.
              </div>
            </div>

            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>Помимо кубатуры важны и другие технические параметры:</div>

              <ul>
                <li>Мощность двигателя. Измеряется она в лошадиных силах. Мотоциклетный двигатель может иметь мощность до 170 л. с., но новичкам следует ограничиться 35-40 л. с.</li>
                <li>Запас хода. Этот параметр зависит от объема топливного бака, мощности и расхода двигателя.</li>
                <li>
                  Скорость, которую может развить мотоцикл (если дорога прямая и ровная). Этот показатель отличается для разных типов транспорта. Кроссовый мотоцикл обычно разгонятся не более 70 км/ч,
                  туристический – до 130 км/ч, а спортбайк – до 300 км/ч. Новичкам езда на большой скорости ни к чему.
                </li>
                <li>
                  Устройство подвески. Она может иметь вид моноамортизатора, подпружиненных стоек или телескопической конструкции. Первый вариант лучше выбирать для езды по пересеченной местности и
                  выполнения трюков. Второй вариант отлично подходит для туристических и спортивных мотоциклов. Телескопическая подвеска больше подходит для городского транспорта.
                </li>
                <li>Наличие и конструкция багажного отделения. Обычно его устанавливают на классики и туристические мотоциклы. Багажное отделение располагают в задней части.</li>
              </ul>
            </div>

            <div className='faq--modal__content_block'>
              <div className='faq--modal__content_title'>2. Какой класс мотоцикла предпочтительнее для новичка?</div>
              <p>
                Любой мотоцикл относится к какой-либо целевой группе. По этому признаку такой транспорт классифицируют на дорожный и внедорожный. Отдельно следует выделить также мотоциклы с узкой
                специализацией – это касается питбайков для мини-мотокросса и мини-супермото, дрэгстеров для дрэг-рейсинга, минибайков для картодрома. Остальная техника может быть использована
                любителями.
              </p>
              <div className='faq--modal__content_title'>Существуют следующие классы мотоциклов:</div>
              <ul>
                <li>
                  {' '}
                  Классик. Мотоциклы этого типа отлично подходят, если планируется быстрое передвижение и периодическое попадание в пробку. Такие агрегаты называют также дорожными. По конструкции
                  классик напоминает советскую технику, но с мощным двигателем.
                </li>
                <li>
                  Спортивный. Такие мотоциклы называют также спортбайками. Их легко узнать во время работы двигателя по характерному звуку, напоминающему реактивный самолет. Спортбайки обеспечивают
                  экстремальную езду по ровным дорогам. При их конструировании стремятся снизить аэродинамическое сопротивление на высокой скорости, поэтому технику оснащают лобовым обтекателем и
                  обтекателем двигателя.
                </li>
                <li>
                  Спорт-турист. Этот вариант отлично подходит для долгой езды за счет удобного расположения руля и подножек. Название мотоциклу дано за возможность сидеть в двух положениях – ровная
                  спина означает туристический вариант, а наклон вперед – спортивный.
                </li>
                <li>Стрит (нейкед). Нейкед – это дорожный мотоцикл без переднего обтекателя и ветрозащиты, с минимумом пластиковой облицовки и выставленными напоказ рамой и силовой установкой.</li>
                <li>
                  Кроссовый. Их назначение – кроссовые мотогонки и экстремальная езда. Есть даже специальные детские модели. У кроссовых мотоциклов двухтактный двигатель, минимальный вес, прочная
                  рама, мощный двигатель и крепкая подвеска с длинным ходом. Переднее колесо обычно больше заднего, светотехники нет.
                </li>
                <li>
                  Эндуро. С такими мотоциклами осваивают внедорожный туризм. Эта техника отличается небольшим весом, подвеской с большим ходом и ремонтопригодностью. В отличие от кроссовых мотоциклов,
                  у эндуро имеется светотехника.
                </li>
              </ul>
            </div>

            <div className='faq--modal__important'>
              <div className='faq--modal__important_title'>Важно!</div>{' '}
              <div className='faq--modal__important_text'>
                Новичкам лучше выбирать мотоцикл типа классик. Для получения первого опыта это лучший вариант. Его показатели позволяют научиться грамотному управлению, закладке в повороты и уверенной
                посадке.
              </div>
            </div>
          </div>
        )}

        {item === 3 && (
          <div className='faq--modal__content'>
            <div className='faq--modal__content_title'>1. Торможение</div>
            <p>Торможение на мотоцикле на скользкой дороге:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/f2_1eexCfb0'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <p>Торможение на мотоцикле с АБС и без:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/C5cu9pBk9eQ'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <div className='faq--modal__content_title'>2. Управление и безопасность</div>
            <p>Как проходить повороты на мотоцикле:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/dipJ8MAzXso'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <p>Фатальные ошибки мотоциклистов:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/S78vQLbt22c'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <p>ПЯТЬ МИФОВ, в которые верит большинство мотоциклистов:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/EgUwnfuUWRY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <p>Контрруление (О мотоциклах на пальцах):</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/WVSIoYUUyJ8'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <div className='faq--modal__content_title'>3. Другое</div>
            <p>Переезд на мотоцикле рельсов, разметки, среза асфальта:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/0iNgXGGcTIw'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>

            <p>Как ездить с ПАССАЖИРОМ на мотоцикле? Часть 1:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/i__FKHQ_fNw'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
            <p>САМАЯ ВАЖНАЯ ЧАСТЬ ТЕЛА: пассажир на мотоцикле. Часть 2:</p>
            <div className='faq--modal__content_video'>
              <iframe
                width='100%'
                height='188'
                src='https://www.youtube.com/embed/CkLHwDgOneE'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
          </div>
        )}
      </div>
      <div className='faq--modal__overlay'></div>
    </div>
  )
}
