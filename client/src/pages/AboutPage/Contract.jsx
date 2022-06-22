import React from 'react'
import { useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'

import logo from '../../img/icons/small--logo.svg'

export const Contract = () => {
  const history = useHistory()

  return (
    <div className='container' style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <header className='header'>
        <div
          onClick={() => {
            history.goBack()
          }}>
          <Back />
        </div>
        <div className='body__title'>Договор</div>
        <img src={logo} alt='logo' />
      </header>

      <section>
        <div className='article__text article--contract'>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <link rel='stylesheet' type='text/css' href='https://service-online.su/text/text-editor/ckeditor-full/contents.css' />
          <style
            dangerouslySetInnerHTML={{
              __html: 'body { font-family: Arial,Helvetica Neue,sans-serif; }',
            }}
          />

          <p style={{ textAlign: 'right' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </strong>
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ДОГОВОР</span>
            </strong>
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>МОТОСОУЛ</span>
            </strong>
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </strong>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПРЕАМБУЛА</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <em>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>Настоящий Договор не является договором проката.</span>
              </em>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <em>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Настоящий Договор не является публичной офертой. В соответствии со ст. 421 Гражданского кодекса Российской Федерации Компания свободна в заключении Договора.
                </span>
              </em>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <em>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Пользователь в случае присоединения к настоящему Договору однозначно определил и оценил свою возможность и необходимость заключения настоящего Договора (присоединения к нему).
                </span>
              </em>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <em>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Настоящий Договор является договором присоединения постольку, поскольку его условия определены Компанией и принимаются Пользователем только посредством присоединения к Договору в
                  целом (ст. 428 Гражданского кодекса Российской Федерации) в порядке, установленном Договором. Договор считается заключенным с момента Активации Пользователя в Сервисе.
                </span>
              </em>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </strong>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>1.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Термины и определения</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В настоящем «Договоре MotoSoul» (далее - «Договор») и приложениях к нему используются следующие термины, имеющие определенное ниже значение.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания – общество с ограниченной ответственностью «Каршеринг Руссия» (ОГРН 1157746288083, ИНН <span style={{ backgroundColor: 'white' }}>9705034527</span>), а также, в применимой
              части, иное лицо, которому общество с ограниченной ответственностью «Каршеринг Руссия» уступило свои права по Договору, либо лицо, кому права ООО «Каршеринг Руссия» перешли по иным
              основаниям.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Сервис MotoSoul (Сервис) – программный комплекс, включающий в себя </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>WEB</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>-интерфейс, размещенный в сети Интернет по адресу </span>
            <a href='https://motosoul.ru'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>https</span>://
              <span style={{ fontFamily: '"Times New Roman",serif' }}>motosoul</span>.<span style={{ fontFamily: '"Times New Roman",serif' }}>ru</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>, а также Мобильное приложение MotoSoul, обеспечивающий:</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              - ознакомление с размещением и характеристиками ТС, предоставляемых для аренды на условиях Договора аренды ТС, на интерактивной карте в Мобильном приложении;
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- бронирование ТС (заключение Предварительного договора аренды ТС);</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- аренду ТС (заключение Основного договора аренды ТС), изменение режимов аренды;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- интерактивное взаимодействие с ТС в пределах функционала Мобильного приложения;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;- формирование электронной подписи, организацию подписания и направления электронных документов между Сторонами, а также подтверждения совершения действий в Мобильном приложении
              (на Сайте) – для документов и сообщений, направление которых обусловлено использованием Сервиса и может быть осуществлено только с использованием Мобильного приложения;
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              - совершение платежей в соответствии с настоящим Договором и договорам, заключаемым в рамках Сервиса, иными документами об использовании Сервиса;
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              - совершение юридически значимых действий, направленных на возникновение, изменение, прекращение отношений по настоящему Договору и договорам, заключаемым в рамках Сервиса, иным
              документам об использовании Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.3.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Арендодатель – лицо, которое выступает в качестве арендодателя при заключении Договора аренды ТС (Основного или Предварительного) с Пользователем.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователь – физическое лицо, присоединившееся к настоящему Договору, зарегистрированное и активированное в Сервисе.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Арендатор – Пользователь, присоединившийся к Договору аренды ТС (Предварительному, Основному).</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.6.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Поверенный – Пользователь, действующий от имени юридического лица, заключившего отдельный договор с Компанией на использование Сервиса, уполномоченный им на заключение договоров в рамках
              Сервиса, а также на реализацию иных полномочий по договорам, заключаемым в рамках Сервиса. Действия, совершаемые Поверенным при использовании Сервиса, являются действиями такого
              юридического лица. Поверенный может быть представителем только одного юридического лица.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.7.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ТС – транспортное средство.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.8.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Мобильное приложение – электронное приложение для Мобильного устройства, предоставляющее возможность использования Сервиса, в т.ч. совершения действий, указанных в п. 1.2 Договора.
              Установка Мобильного приложения осуществляется с использованием сервисов{' '}
            </span>
            <a href='http://www.itunes.apple.com'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>www.itunes.apple.com</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> и (или) </span>
            <a href='http://www.play.google.com'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>www</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>play</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>google</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>com</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> в сети Интернет Пользователем самостоятельно.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.9.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Программное обеспечение MotoSoul – совокупность программных средств (в т.ч. Сайт, Мобильное приложение), обеспечивающих функционирование Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.10.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Мобильное устройство - электронное устройство (смартфон, мобильный телефон), работающее на базе операционных систем iOS или Android.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.11.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Сайт – </span>
            <a href='https://motosoul.ru'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>https</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>://</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>motosoul</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.ru</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.12.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Регистрация в Сервисе – осуществление Пользователем действий, предусмотренных инструкциями, изложенными в Договоре, и направленных на подключение к Сервису. При регистрации Пользователю
              присваивается уникальный{' '}
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ID</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователя.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.13.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Активация в Сервисе – подключение Пользователя к Сервису по результатам Регистрации, создание Учетной записи Пользователя, организация доступа к использованию Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.14.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Личный кабинет – индивидуальный раздел в Мобильном приложении, доступ в который осуществляется Пользователем после входа в Мобильное приложение.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.15.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Логин – контактный номер мобильного телефона Пользователя, вводимый Пользователем для доступа в Мобильное приложение от имени конкретного Пользователя (под Учетной записью Пользователя).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.16.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Код подтверждения - уникальная последовательность символов, автоматически сгенерированная Программным обеспечением при доступе в Мобильное приложение и Личный кабинет от имени
              конкретного Пользователя (под Учетной записью Пользователя), и направляемая в виде СМС-сообщения на Мобильное устройство, с которого осуществляется доступ в Мобильное приложение.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.17.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Учетная запись – совокупность данных о Пользователе, служащая для совершения действий в рамках Сервиса от имени Пользователя.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.18.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Электронная подпись (Пользователя) - персональная информация о Пользователе в электронной форме, присоединяемая к подписываемой информации (документу) и используемая для подтверждения
              факта совершения Пользователем действий в Мобильном приложении.{' '}
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Представляет собой зашифрованные сведения о Пользователе, в </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>т.ч.</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ID</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователя. Применительно к событиям, связанным с Сессией аренды, применяется также </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ID</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>аренды, связанный с </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ID</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователя</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.19.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Ключ электронной подписи – </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>уникальная последовательность символов, предназначенная для создания Электронной подписи</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              При входе Пользователя в Мобильное приложение либо в Личный кабинет с использованием пары "Логин + Код подтверждения" формируется ключ простой Электронной подписи, который позволяет
              определить Пользователя при взаимодействии с системой (
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ID</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> Пользователя), в том числе при совершении юридически значимых действий в системе.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Для работы с системой и установления связи Пользователя с Ключом электронной подписи Пользователь вводит известные только ему Логин и Код подтверждения. Указанная пара "Логин + Код
              подтверждения" является необходимым и уникальным условием для создания Электронной подписи и подписания юридически значимых документов, совершения юридически значимых действий.
              Подписание документов Электронной подписью и совершение юридически значимых действий с использованием Электронной подписи приравнивается к подписанию документов личной подписью
              Пользователя (Поверенного) и совершению иных юридически значимых действий от имени Пользователя. Информация в электронной форме, подписанная Электронной подписью, созданной в
              соответствии с настоящим пунктом Договора, признается электронным документом, равнозначным документу на бумажном носителе, подписанному собственноручной подписью.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Нажатие Пользователем активных клавиш в Мобильном приложении создает Электронную подпись с использованием Ключа электронной подписи в порядке, определенном в настоящем пункте Договора, и
              представляет собой электронное подписание документов, электронное подтверждение совершения действий в Мобильном приложении.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Риск разглашения сведений пары "Логин + Код подтверждения" несет Пользователь, включая, но не ограничиваясь риском выбытия из владения Пользователя электронного устройства с работающим
              Мобильным приложением под Учетной записью Пользователя. Все действия, совершенные через Мобильное приложение или в Личном кабинете, считаются совершенными Пользователем.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Приведенные в Договоре названия активных клавиш, применяемые в Мобильном приложении, могут изменяться в зависимости от версии Мобильного приложения. Однако семантическое значение
              неизменно.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.20.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Информационный центр – служба Компании, осуществляющая информационную поддержку Пользователя, а также действия по сопровождению использования Сервиса, взаимодействие с Пользователем. На
              Сайте и в Мобильном приложении равнозначно понятиям «Техническая поддержка», «Служба технической поддержки».
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.21.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Бронирование – закрепление выбранного Пользователем ТС за данным Пользователем на период Бронирования. Бронирование означает заключение Предварительного договора аренды ТС на условиях
              Договора аренды ТС. Действует до заключения Пользователем Основного договора аренды ТС или отмены Бронирования, но не более срока Бронирования.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.22.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Сессия аренды – период времени с начала аренды и до ее завершения.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.23.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Документы об использовании Сервиса:</span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Договор MotoSoul (настоящий Договор);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Положение о тарифах («Личный» режим);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- формы заявлений, актов и проч. документов;</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Договор аренды ТС (Предварительный договор аренды ТС, Основной договор аренды ТС);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ color: 'black' }}>- Положение о территориальных ограничениях в использовании ТС (приложение к Договору аренды ТС);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Положение о штрафах (приложение к Договору аренды ТС);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Инструкция по определению нормального износа (приложение к Договору аренды ТС);</span>
            </u>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>- Акт приема-передачи и Акт возврата транспортного средства (приложение к Договору аренды ТС).</span>
            </u>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Актуальная редакция документов об использовании Сервиса размещена на Сайте и в Мобильном приложении. В случае противоречия документов об использовании Сервиса на Сайте и в Мобильном
              приложении, актуальными считаются редакции, размещенные на Сайте.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.24.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Договор аренды ТС (Основной, Предварительный договор) – договор аренды транспортного средства без экипажа, заключаемый в порядке, установленном настоящим Договором с использованием
              электронной подписи. Является договором присоединения. Актуальная редакция Договора аренды ТС и приложений к нему отображается при его заключении в Мобильном приложении.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.25.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Положение о тарифах («Личный» режим) – документ, устанавливающий размеры вознаграждения Компании за использование Сервиса в Личном режиме, в т.ч. по отдельным договорам, заключенным в
              рамках Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.26.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Правила страхования – обязательные к соблюдению Пользователем условия страхования в соответствии с Федеральным законом от 25.04.2002 г. № 40-ФЗ «Об обязательном страховании гражданской
              ответственности владельцев транспортных средств» и Правилами обязательного страхования гражданской ответственности владельцев транспортных средств (утв. Приказом Банка России от
              19.09.2014 г. № 431-П).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.27.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Бонусы – скидки, предоставляемые Пользователю в порядке и на условиях, определенных Компанией.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1.28.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Бонусный счет – условный счет, не являющийся банковским счетом, исключающий возможность ведения денежных операций и используемый исключительно для учета рублевого эквивалента бонусов.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ОБЩИЕ УСЛОВИЯ</span>
              </strong>
            </p>
          </div>
          <p>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </strong>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>2.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПРЕДМЕТ ДОГОВОРА</span>
              </strong>
            </p>
          </div>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания в порядке и на условиях, предусмотренных настоящим Договором и документами об использовании Сервиса, предоставляет Пользователю доступ к Сервису и его функциональным
              возможностям, в т.ч. с возможностью заключения Договора аренды ТС (Предварительного, Основного), а Пользователь обязуется надлежащим образом исполнять условия Договора и иных документов
              об использовании Сервиса. Объем услуги доступа к Сервису связывается с уровнем прав доступа Пользователя к функционалу, определяемому в соответствии с заключенными Пользователем
              договорами (Договор аренды ТС и проч.).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Выбор и получение информации о ТС, заключение Предварительного (Бронирование) и Основного (прием ТС по Акту приема-передачи) договора аренды ТС, начало и окончание Сессии аренды,
              изменение режимов аренды, а также совершение иных действий, вытекающих из Договора и документов об использовании Сервиса, осуществляется посредством Мобильного приложения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.3.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователь обязан соблюдать условия использования Сервиса.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Заключая Договор, Пользователь подтверждает, что он:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.4.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>ознакомился с настоящим Договором и документами об использовании Сервиса; </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.4.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>предоставил действительные данные в целях заключения и исполнения Договора;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.4.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>подтверждает, что все действия, совершенные с Учетной записью Пользователя, совершены Пользователем;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.4.4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>согласен с тем, что доступность ТС для аренды определяется Компанией по своему усмотрению.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь соглашается с тем, что юридическое лицо, заключившее отдельный договор с Компанией на использование Сервиса, может определить его в качестве своего Поверенного. Согласие
              Пользователя на получение статуса Поверенного с приобретением соответствующих прав и обязанностей выражается в выборе Пользователем при использовании Сервиса специализированного режима,
              предусматривающего действия Пользователя как Поверенного.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>3.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ СЕРВИСА</span>
              </strong>
            </p>
          </div>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь признает, что программное обеспечение Сервиса (включает Мобильное приложение, Сайт, иные программы, используемые для реализации Сервиса) является достаточным для обеспечения
              надлежащей работы при приеме, передаче, обработке и хранении информации, а также для защиты информации от несанкционированного доступа, подтверждения подлинности и авторства электронных
              документов, а также для разрешения конфликтных ситуаций по ним. Пользователь соглашается с тем, что программное обеспечение постоянно совершенствуется, в связи с чем возможны технические
              проблемы в функционировании. Программное обеспечение предоставляется «как есть», без предъявления претензий к функционированию программного обеспечения, используемого в Сервисе.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания не предоставляет никаких гарантий, явных или подразумеваемых, что программное обеспечение будет отвечать требованиям или ожиданиям Пользователя, будет соответствовать его целям
              и задачам. Пользователь использует программное обеспечение на свой риск. Компания не принимает на себя ответственность за несоответствие программного обеспечения каким-либо ожиданиям
              Пользователя.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.3.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Компания не несет ответственность за оборудование, используемое Пользователем при работе с программным обеспечением.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь соглашается с тем, что для целей настоящего Договора, а также обеспечения безопасности Пользователя и арендуемых ТС, Мобильное приложение должно использовать данные
              геолокации (навигационные данные) Мобильного устройства, и обязуется обеспечивать предоставление соответствующих данных.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь соглашается с тем, что данные программного обеспечения (в т.ч. навигационных систем) в совокупности с данными о действиях из Учетной записи Пользователя, являются
              достаточными данными, подтверждающими действия Пользователя, за которым закреплена соответствующая Учетная запись, в определенный программным обеспечением момент времени (в том числе
              периоды Сессии аренды, использование тех или иных тарифов, траектория движения и проч.).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.6.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь понимает, что названия активных клавиш в Мобильном приложении и на Сайте, как и функционал, могут быть изменены, сохраняя при этом смысл исходя из логики совершения действий
              по Договору и значения слов на русском языке или ином языке, на который переведено содержание Мобильного приложения и Сайта.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.7.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Использование функционала Мобильного приложения может быть ограничено в случаях наличия задолженности Пользователя перед Компанией либо когда использование определенного функционала при
              данных обстоятельствах может привести к причинению вреда жизни или здоровью людей, повреждению имущества, нарушению требований действующего законодательства, условий Договора MotoSoul,
              Договора аренды ТС и иных документов об использовании Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.8.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              При использовании функционала Мобильного приложения Пользователь обязан следовать инструкциям, предоставленным в Мобильном приложении, а при их отсутствии действовать как добросовестный
              пользователь Мобильного приложения, а в случаях аренды ТС также как добросовестный владелец ТС.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.9.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае несогласия Пользователя условиями предоставления Сервиса, настоящими условиями использования программного обеспечения, Пользователь обязуется прекратить использовать Сервис и
              отказаться от Договора.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3.10.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              При нахождении Пользователя за пределами территории Российской Федерации или при использовании Пользователем номера мобильного телефона зарубежного оператора мобильной связи в качестве
              контактного номера мобильного телефона, а также для целей получения SMS-сервиса и (или) Кода подтверждения, в силу особенностей работы систем операторов мобильной связи увеличивается
              риск несвоевременного получения или неполучения Пользователем SMS-сообщений от Компании. Пользователь уведомлен о данном риске, полностью его понимает и учитывает при выезде за границу,
              а также при указании Компании своего номера мобильного телефона в качестве контактного номера мобильного телефона, а также для целей получения SMS-сервиса и (или) Кода подтверждения.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>&nbsp;</p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>4.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПОРЯДОК РЕГИСТРАЦИИ В СЕРВИСЕ. ЗАКЛЮЧЕНИЕ ДОГОВОРА</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания и Пользователь заключают настоящий Договор в электронной форме посредством осуществления совокупности следующих действий:
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              со стороны Пользователя – совершение Пользователем в Мобильном приложении действий, направленных на регистрацию в Сервисе, в т.ч. предоставление документов и информации, необходимых для
              проверки Компанией возможности заключить Договор с Пользователем. До одобрения Компанией заключения Договора с Пользователем и Активации его в Сервисе действия Пользователя
              рассматриваются как заявка на ознакомление с Договором в целях дальнейшего принятия им решения о присоединении или об отказе от присоединения к Договору и не подтверждает факт заключения
              Договора, а также не влечет за собой возможности использования Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              со стороны Компании – путем Активации Пользователя в Сервисе. Активация приравнивается к акцепту заявки Пользователя на заключение Договора.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Договор считается заключенным с момента Активации Пользователя в Сервисе. При Активации Компания создает Учетную запись Пользователя в Сервисе.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Заключение Договора возможно при соответствии Пользователя следующим требованиям:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>лицо является гражданином Российской Федерации, иностранным гражданином или лицом, имеющим двойное гражданство;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              лицо обладает правом управления ТС <span style={{ color: 'black' }}>(категория Б; в латинской транслитерации – </span>
            </span>
            <span style={{ color: 'black' }}>B</span>
            <span style={{ color: 'black' }}>) </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>в соответствии с требованиями действующего законодательства;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>имеет действительное водительское удостоверение:</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;&nbsp;&nbsp;&nbsp; для граждан Российской Федерации – российское национальное водительское удостоверение;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;&nbsp;&nbsp;&nbsp; для иностранных граждан - национальное водительское удостоверение того государства, гражданином которого является или международное водительское удостоверение
              (кроме выданных на территории Российской Федерации);
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;&nbsp;&nbsp;&nbsp; для граждан, имеющих двойное гражданство – национальное водительское удостоверение одного из государств, гражданином которого он является или международное
              водительское удостоверение (кроме выданных на территории Российской Федерации).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>отсутствуют предусмотренные действующим законодательством Российской Федерации противопоказания для управления ТС;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>возраст составляет не менее 18 (восемнадцать) лет</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              соответствует требованиям, предъявляемым действующим законодательством Российской Федерации к лицу, которое вправе управлять ТС;
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>имеет регистрацию по месту жительства или регистрацию по месту временного пребывания.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Указанные в настоящем разделе Договора требования к Пользователю не являются исчерпывающими. Компания вправе не заключать Договор с лицом, не соответствующим указанным в настоящем
              разделе требованиям, а равно в случае, если у Компании есть основания полагать, что Пользователь может допустить нарушение Договора либо не сможет осуществить возмещение возможных
              убытков. В соответствии со ст. 421 Гражданского кодекса Российской Федерации Компания свободна в заключении Договора и заключение Договора не является ее обязанностью.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Регистрация Пользователя в Сервисе</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Регистрация Пользователя в Сервисе осуществляется в Мобильном приложении с подтверждением совершенных действий нажатием соответствующих активных клавиш. При этом технически может быть
              предусмотрено использование чат-бота (ответ на вопросы чат-бота с автоматическим заполнением анкеты). Совокупность действий, указанных в настоящем пункте действий означает выражение воли
              на присоединение Пользователя к Договору, составляет формирование и подачу заявки на присоединение к Договору.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <table
            border={1}
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: 'collapse',
              msoBorderAlt: 'solid windowtext .5pt',
              msoPaddingAlt: '0cm 5.4pt 0cm 5.4pt',
              msoYftiTbllook: 1184,
              width: '534.1pt',
            }}>
            <tbody>
              <tr>
                <td style={{ backgroundColor: '#c4bc96', width: '19.6pt' }}>
                  <p style={{ marginLeft: '18.0pt', textAlign: 'center' }}>
                    <strong>
                      <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td style={{ backgroundColor: '#c4bc96', width: '262.25pt' }}>
                  <p style={{ marginLeft: '18.0pt', textAlign: 'center' }}>
                    <strong>
                      <span
                        style={{
                          color: 'black',
                          fontFamily: '"Times New Roman",serif',
                        }}>
                        С использованием чат-бота
                      </span>
                    </strong>
                  </p>
                </td>
                <td style={{ backgroundColor: '#c4bc96', width: '252.25pt' }}>
                  <p style={{ marginLeft: '18.0pt', textAlign: 'center' }}>
                    <strong>
                      <span
                        style={{
                          color: 'black',
                          fontFamily: '"Times New Roman",serif',
                        }}>
                        Без использования чат-бота
                      </span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2} style={{ width: '19.6pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>1</span>
                  </p>
                </td>
                <td style={{ width: '262.25pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Подтверждение Пользователем соответствия требованиям к минимальному возрасту и водительскому стажу. Подтверждение достоверности представленных сведений осуществляется нажатием в
                      Мобильном приложении активной клавиши "Подтверждаю".
                    </span>
                  </p>
                </td>
                <td rowSpan={2} style={{ width: '252.25pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>Заполнение формы анкеты для регистрации с указанием следующих сведений о Пользователе:</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>- гражданство;</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>- адрес электронной почты (</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>e</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>-</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>mail</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>) Пользователя;</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>- имя (псевдоним) Пользователя.</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Представление на ознакомление Пользователю (посредством отображения на экране Мобильного устройства) Политика по обработке персональных данных, Согласие на обработку персональных
                      данных.
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Подтверждение Пользователем достоверности представленных сведений, а также ознакомления и согласия с указанными документами осуществляется посредством нажатия в Мобильном
                      приложении активной клавиши "Согласен, зарегистрироваться".
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '262.25pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Представление на ознакомление Пользователю (посредством отображения на экране Мобильного устройства), Политика по обработке персональных данных, Согласие на обработку
                      персональных данных.
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Ознакомление и согласие с указанными документами подтверждается нажатием в Мобильном приложении активной клавиши "Ознакомился и подтверждаю".
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '19.6pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>2</span>
                  </p>
                </td>
                <td colSpan={2} style={{ width: '514.5pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Мобильное приложение запрашивает доступ к камере Мобильного устройства Пользователя. После этого Пользователь лицо производит фотосъемку:
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      - разворот 2 и 3 страниц паспорта РФ или страницы заверенного перевода на русский язык паспорта иностранного гражданина, содержащие фотографию Пользователя, а также сведения о
                      ФИО Пользователя, кем и когда выдан паспорт, срок действия (если предусмотрено паспортом государства);
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>- страницы паспорта с регистрацией по месту жительства Пользователя;</span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      - селфи: лицо Пользователя с паспортом РФ, раскрытом на развороте 2 и 3 страниц или на страницах заверенного перевода на русский язык паспорта иностранного гражданина, содержащих
                      фотографию Пользователя, а также сведения о ФИО Пользователя, кем и когда выдан паспорт, срок действия (если предусмотрено паспортом государства);
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>- лицевую и оборотную стороны действительного водительского удостоверения Пользователя-физического лица. </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Подтверждение согласия Пользователя произвести фотосъемку осуществляется через Мобильное приложение посредством нажатия активных клавиш, соответственно, "Сделать фото" и "Сделать
                      селфи". Фотосъемка осуществляется посредством встроенной в Мобильное приложение программы для фотосъемки. В целях корректной фотосъемки и единообразия формата сохранных сведений
                      Мобильное приложение использует шаблоны, позволяющие размещать объекты фотосъемки.
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Мобильное приложение не предусматривает загрузку ранее созданных фотографий. Осуществляется направление только фотографий, сделанных в процессе регистрации в Мобильном
                      приложении.
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '19.6pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>3</span>
                  </p>
                </td>
                <td style={{ width: '262.25pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>Указание адреса электронной почты (</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>e</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>-</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>mail</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>) Пользователя. Согласие предоставить адрес электронной почты подтверждается нажатием активной клавиши "Добавить </span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>EMAIL</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      ", после чего Пользователь вводит адрес своей электронной почты в поле для ввода в чат-боте и нажимает активную клавишу "Сохранить".
                    </span>
                  </p>
                </td>
                <td style={{ width: '252.25pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '19.6pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>4</span>
                  </p>
                </td>
                <td colSpan={2} style={{ width: '514.5pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Добавление сведений о банковской карте Пользователя. Для осуществления расчетов по Договору Пользователь прикрепляет к своей Учетной записи банковскую карту, с которой будут
                      списываться денежные средства в счет платежей, осуществляемых при использовании Сервиса. Допускается прикрепление банковских карт национальных платежных систем (рублевые), а
                      также{' '}
                    </span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>VISA</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>, </span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>MASTERCARD</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      {' '}
                      (рублевые), выпущенные на территории РФ, - с наличием возможности совершения интернет-платежей. Возможность совершения интернет-платежей обеспечивается Пользователем
                      самостоятельно через банк, выпустивший банковскую карту.
                    </span>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      Пользователь предупреждается о том, что в целях проверки банковской карты с нее будет осуществлено списание денежных средств в размере 2 (два) руб. с последующим возвратом.
                      Согласие предоставить данные банковской карты подтверждается нажатием активной клавиши "Добавить карту", после чего Пользователь через шлюз передачи данных вводит в поле ввода
                      номер банковской карты, срок ее действия, код{' '}
                    </span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>CVC</span>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>
                      , имя владельца и нажимает активную клавишу "Добавить", передавая указанные данные банку, обслуживающему Компанию. Сведения о банковской карте направляются через шлюз передачи
                      данных непосредственно в банк, обслуживающий Компанию, исключая получение Компанией вводимых Пользователем данных банковской карты. Компания получает от банка, обслуживающего
                      Компанию лишь сведения о номере банковской карте в виде маски 1111 **** **** 1111. Добавление сведений о банковской карте при регистрации не является обязательным, однако в
                      отсутствие сведений о банковской карте Пользователь не сможет заключить Договор аренды ТС (Предварительный и Основной) в рамках Сервиса.
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Подтверждение совершаемых при регистрации действий осуществляется путем нажатия соответствующих активных клавиш в Мобильном приложении. При этом создается Электронная подпись в порядке,
              определенном Договором.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Отказ Пользователя от совершения каких-либо из указанных действий по регистрации в Сервисе (за исключением добавления сведений о банковской карте) означает отказ Пользователя от
              регистрации в Сервисе и влечет за собой прекращение процесса регистрации.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае выявления Компанией направления ненадлежащих фотографий, предоставления неполной, противоречивой, недостоверной или нечитаемой информации, а также в иных случаях, когда Компания
              посчитает необходимым, Компания может запросить у Пользователя вновь совершить действия по регистрации в Сервисе либо направить дополнительные сведения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              После совершения указанных действий по регистрации в Сервисе Компания осуществляет проверку предоставленных Пользователем сведений, а также проводит анализ возможности активации
              Пользователя в Сервисе и заключения настоящего Договора. О принятом решении Компания вправе известить Пользователя через Мобильное приложение либо посредством иных средств связи,
              сведения о которых были предоставлены Пользователем при регистрации.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>4.10.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае принятия Компанией решения о возможности заключения Договора MotoSoul, Компания извещает Пользователя об этом через Мобильное приложение. Одновременно с извещением Компания
              предоставляет Пользователю в Мобильном приложении текст настоящего Договора для ознакомления. Для присоединения к Договору Пользователь нажимает соответствующие активные клавиши в
              Мобильном приложении («Подписать»). После электронного подписания Договора Компания осуществляет Активацию Пользователя в Сервисе.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>&nbsp;</p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>5.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ДОСТУП К СЕРВИСУ</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>5.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователь, в т.ч. в лице Поверенного, осуществляет доступ к Сервису посредством своей Учетной записи. </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>5.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Связь Пользователя с Учетной записью и получения доступа к функционалу Сервиса производится в следующем порядке:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              при запуске Мобильного приложения на Мобильном устройстве, Пользователь должен ввести в специальном поле ввода в Мобильном приложении контактный номер мобильного телефона, указанный при
              регистрации в Сервисе и связанный с Учетной записью данного Пользователя (Логин);
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Компания направляет на данный номер СМС-сообщение с уникальным одноразовым паролем (Код подтверждения);</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              получив уникальный одноразовый Код подтверждения, Пользователь вводит его в специальное поле ввода в Мобильном приложении, подтверждая таким образом, что запуск и использование
              Мобильного приложения осуществляется именно Пользователем, Учетная запись которого связана с указанным контактным номером мобильного телефона. При вводе Кода подтверждения формируется
              Электронная подпись в связи с использованием пары «Логин+ Код подтверждения».
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>5.3.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае формирования недействительной (недостоверной) пары «Логин + Код подтверждения», в доступе к Сервису будет отказано. В случае ввода действительной (достоверной) пары «Логин + Код
              подтверждения», Пользователь получает доступ к Сервису в соответствии с функционалом, определенном Мобильным приложением.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>5.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Все действия в Мобильном приложении, совершенные под Учетной записью Пользователя, считаются действиями Пользователя.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>6.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ЛИЧНЫЙ И КОРПОРАТИВНЫЙ РЕЖИМ ИСПОЛЬЗОВАНИЯ СЕРВИСА</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>6.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Сервис предусматривает возможность выбора специализированного режима использования Сервиса:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;«Личный» режим – предусматривает использование Сервиса Пользователем-физическим лицом от своего имени.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              «Корпоративный» (В2В и проч.) режим – предусматривает использование Сервиса Пользователем от имени юридического лица, заключившего отдельный договор с Компанией на использование Сервиса.
              При этом Пользователь приобретает статус Поверенного по отношению к такому юридическому лицу.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>6.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Выбор специализированного режима использования Сервиса осуществляется в Мобильном приложении перед совершением действий по бронированию (заключению Предварительного договора аренды ТС).
              Выбор Пользователя фиксируется программным обеспечением. При этом создается Электронная подпись в порядке, определенном Договором. При выборе специализированного режима использования
              Сервиса «Корпоративный» (
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>B</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>2</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>B</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}> и проч.) Пользователь приобретает статус Поверенного. </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>7.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ЗАКЛЮЧЕНИЕ ДОГОВОРА АРЕНДЫ ТС</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.1.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Сервис позволяет выбрать ТС для аренды, забронировать ТС (заключить Предварительный договор аренды ТС), арендовать ТС (заключить Основной договор аренды ТС) на условиях, указанных в этих
              договорах.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Заключение Предварительного и Основного договора аренды ТС осуществляется посредством присоединения (ст. 428 ГК РФ) к ним Пользователя в электронной форме через Мобильное приложение
              посредством нажатия соответствующих активных клавиш (использование простой Электронной подписи).
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Ознакомление с размещением и характеристиками ТС, предоставляемых для аренды</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.3.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Мобильное приложение позволяет Пользователю получить информацию о конкретных ТС, доступных для бронирования и последующей аренды, об Арендодателе в отношении данных ТС.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Информация о ТС отображается при нажатии на изображение ТС на интерактивной карте в Мобильном приложении. </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Информация о местонахождении ТС размещается на интерактивной карте в Мобильном приложении.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Бронирование ТС. Заключение Предварительного договора аренды ТС</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.6.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              При бронировании ТС Пользователь заключает Предварительный договор аренды ТС в отношении выбранного им в Мобильном приложении ТС и в соответствии с действующими в соответствующем режиме
              использования Сервиса тарифами.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.7.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Возможность бронирования может быть связана с необходимостью </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              осуществления Пользователем определенных действий, в том числе, внесения предоплаты в соответствии с Положением о тарифах, оплатой Пользователем задолженности перед Компанией. До
              совершения указанных действий бронирование ТС может быть недоступно.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.8.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В зависимости от марки ТС и ее технического оснащения, Мобильное приложение может обеспечивать совершение дополнительных действий, в т.ч. "Прогреть", "Поморгать" и проч., которые
              осуществляются посредством нажатия соответствующих активных клавиш в Мобильном приложении.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.9.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь осуществляет внешний осмотр ТС, в т.ч. на предмет наличия внешних повреждений и иных недостатков, в т.ч. исключающих возможность использования ТС. Для того, чтобы начать
              осмотр, Пользователь в Мобильном приложении нажимает активную клавишу «Начать осмотр». В специальных графах в Мобильном приложении Пользователь отмечает состояние ТС, в т.ч. выявленные
              недостатки ТС, с использованием встроенного сервиса Мобильного приложения фотографирует ТС для демонстрации состояния ТС, в т.ч. выявленных повреждений и недостатков ТС, и направляет
              указанные сведения Компании. Фотографии должны быть четкими, сделанными с ракурсов, позволяющих получить информацию о состоянии всех видимых наружных поверхностей ТС. Допускается
              дополнительное прицельное фотографирование дефектов принимаемого ТС. В случае невыполнения требований настоящего пункта по количеству, качеству и информативности предоставляемых
              фотографий ТС, при последующем подписании Пользователем Акта приема-передачи ТС Пользователь считается принявшим ТС в надлежащем состоянии и без повреждений.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Аренда ТС. Заключение Основного договора аренды ТС. Изменение режимов аренды</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.10.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Для заключения Основного договора аренды ТС Пользователь после внешнего осмотра ТС, произведенного в период бронирования и в течение срока бронирования нажимает в Мобильном приложении
              активную клавишу «Начать аренду». Мобильное приложение предоставляет Пользователю для ознакомления Акт приема-передачи ТС, содержащий сведения, позволяющие идентифицировать арендуемое
              ТС, а также дату и время подписания Акта.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.11.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Основной договор аренды ТС считается заключенным, ТС переданным в аренду Пользователю, а Сессия аренды начатой с момента нажатия Пользователем активной клавиши "Подписать" Акт
              приема-передачи ТС в Мобильном приложении, но в любом случае не позднее снятия блокировки дверей ТС / запуска двигателя / начала движения (по наиболее раннему событию).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>7.12.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Для завершения Сессии аренды Пользователь нажимает активную клавишу «Завершить аренду» в Мобильном приложении, подписывает Акт возврата ТС,{' '}
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>совершает иные действия, предусмотренные Договором аренды ТС.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>8.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>БЛОКИРОВКА ПОЛЬЗОВАТЕЛЕЙ</span>
              </strong>
            </p>
          </div>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <u>
              <span style={{ backgroundColor: 'white' }}>&nbsp;</span>
            </u>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}8.1.&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания вправе блокировать Учетную запись Пользователя (приостановить доступ к Сервису) при наличии следующих обстоятельств
              <span style={{ color: 'black' }}>:</span>
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>
              в случае возникновения подозрений недобросовестности Пользователя (в т.ч., но не ограничиваясь, при предоставлении недостоверных сведений, невозможности списания денежных средств и
              проч.);
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>в случае нарушения Пользователем условий Договора MotoSoul, Договора аренды ТС и документов об использовании Сервиса;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>при наличии у Пользователя неоплаченной задолженности;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>в случае некорректного (грубого, оскорбительного) поведения Пользователя, использования ненормативной лексики;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>в случаях попытки Пользователя ввести Компанию в заблуждение, предоставить недостоверные данные, исказить факты;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>в случаях отказа выполнения требований Компании, предусмотренных или вытекающих из Договора, в том числе путем бездействия;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>
              в случаях, когда Пользователь не соответствует (прекратил соответствовать) требованиям, предъявляемым Компанией к Пользователю как к пользователю Сервиса, равно как при прекращении
              отношений по использованию Сервиса с таким Пользователем;
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>в случаях, когда у Компании есть основания для одностороннего отказа от Договора в соответствии с Договором и действующим законодательством;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>
              в иных случаях, когда нарушения Пользователем Договора или иных документов об использовании Сервиса, по мнению Компании, исключают возможность дальнейшего использования Сервиса
              Пользователем.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}8.2.&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>
              Блокировка Учетной записи Пользователя означает ограничение функционала Учетной записи Пользователя, в результате которого Пользователь не может осуществлять бронирование, аренду ТС, а
              также некоторые иные действия, которые входят в объем прав незаблокированной Учетной записи Пользователя.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}8.3.&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>
              &nbsp;О блокировке Учетной записи Пользователь отдельно не информируется, поскольку с момента блокирования совершение действий по бронированию, аренде ТС, а также совершение некоторых
              иных действий будет невозможно.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}8.4.&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>
              Снятие блокировки Учетной записи Пользователя может быть связано с истечением определенного периода времени, выполнением Пользователем своих обязательств, устранения обстоятельств,
              явившихся основаниями для блокировки, а также иных требований Компании. Блокировка Учетной записи может быть установлена на период принятия решения о целесообразности дальнейшего
              взаимодействия с Пользователем по Договору.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', marginRight: '1.0pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>9.&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПРАВА И ОБЯЗАННОСТИ СТОРОН</span>
              </strong>
            </p>
          </div>
          <p>
            <span style={{ color: 'black' }}>&nbsp;</span>
          </p>
          <p>
            {/*[if !supportLists]*/}9.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>Права Пользователя:</span>
          </p>
          <p>
            {/*[if !supportLists]*/}9.1.1.&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>требовать от Компании исполнения ей своих обязательств по Договору;</span>
          </p>
          <p>
            {/*[if !supportLists]*/}9.1.2.&nbsp;&nbsp; {/*[endif]*/}обращаться в Информационный центр за получением разъяснений по вопросам в пределах компетенции сотрудников Информационного центра.
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.2.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>Обязанности Пользователя:</span>
            </u>
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.1.&nbsp; </span>
            {/*[endif]*/}
            <span style={{ color: 'black' }}>своевременно и в полном объеме производить платежи, связанные с использованием Сервиса;</span>
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.2.&nbsp; </span>
            {/*[endif]*/}гарантировать Компании, что предоставляемые Компании персональные данные являются достоверными;
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.3.&nbsp; </span>
            {/*[endif]*/}строго выполнять все инструкции, указания, рекомендации Компании;
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.4.&nbsp; </span>
            {/*[endif]*/}не использовать никакие технологии и не предпринимать никаких действий, которые могут нанести вред интересам и имуществу Компании;
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.5.&nbsp; </span>
            {/*[endif]*/}
            <span style={{ backgroundColor: 'white' }}>сохранять в тайне Логин и </span>
            Код подтверждения<span style={{ backgroundColor: 'white' }}>;</span>
          </p>
          <p>
            {/*[if !supportLists]*/}
            <span style={{ color: 'black' }}>9.2.6.&nbsp; </span>
            {/*[endif]*/}имеет иные обязанности, вытекающие из Договора, документов об использовании Сервиса, а также установленные действующим законодательством.
          </p>
          <p>
            {/*[if !supportLists]*/}9.3.&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>Права Компании:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}9.3.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>требовать от Пользователя исполнения обязательств, определенных Договором и документами об использовании Сервиса;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.3.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>осуществлять фото- и видеофиксацию в ТС, а также аудиозапись разговоров при взаимодействии с Информационным центром;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.3.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>отслеживать местонахождение ТС, а также возможные нарушения Договора (датчик дыма, </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>GPS</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>-маяк и проч.);</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.3.4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>без уведомления и согласия Заказчика привлекать любых третьих лиц к предоставлению Сервиса;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}9.3.5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/*[endif]*/}
            передавать права и обязанности по настоящему Договору третьим лицам, а также привлекать третьих лиц к исполнению отдельных функций по Договору, в т.ч. на основе агентского договора, без
            получения дополнительного согласия Пользователя. Уведомление Пользователя о данных обстоятельствах осуществляется по усмотрению Компании;
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}9.3.6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>имеет иные права, установленные Договором и документами об использовании Сервиса, а также вытекающие из существа обязательств.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.4.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <u>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>Обязанности Компании:</span>
            </u>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.4.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>предоставлять доступ к Сервису в порядке и на условиях, определенных Договором и документами об использовании Сервиса;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.4.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              предоставить Пользователю посредством размещения на Сайте или в Мобильном приложении информацию о ТС, их видах, технических характеристиках (в объеме, определяемом Компанией),
              Арендодателе, тарифах и иных условиях пользования Сервисом;
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.4.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              имеет иные обязанности, вытекающие из Договора, документов об использовании Сервиса, а также установленные действующим законодательством.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>9.5.&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В том случае, если Сторона не воспользовалась какими-либо правами, предоставленными ей настоящим Договором, соответствующие права не прекращаются, и Сторона имеет право воспользоваться
              ими в дальнейшем.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>10.&nbsp;&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ВОЗНАГРАЖДЕНИЕ КОМПАНИИ</span>
              </strong>
            </p>
          </div>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Все платежи, связанные с использованием Сервиса, определяются настоящим Договором, Положением о тарифах, Положением о штрафах, договорами об оказании соответствующих услуг (в т.ч.
              Договором аренды ТС), иными документами об использовании Сервиса, регулирующими оказание отдельных услуг.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Сведения о произведенных платежах и задолженности фиксируются в Личном кабинете Пользователя. В Личном кабинете Пользователя также могут отражаться сведения о платежах и задолженностях
              за период использования ТС в качестве Поверенного.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Функционалом Сервиса может быть предусмотрена возможность Пользователя, выступающего в качестве Поверенного, самостоятельно оплатить задолженность и иные платежи, связанные с
              использованием Пользователем ТС в качестве Поверенного (в т.ч. с использованием банковской карты, связанной с личной Учетной записью Пользователя) от имени лица, Поверенным которого
              является Пользователь. В таком случае все платежи Поверенного, поступающие в оплату задолженности лица, Поверенным которого он является, признаются платежами такого лица, сделанными
              Поверенным по его поручению.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ textAlign: 'center' }}>
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>Общий порядок оплаты</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.4.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Платежи осуществляются в порядке и на условиях, определенных действующим законодательством и правилами соответствующих платежных систем. Безналичная оплата производителя через
              банк-партнер Компании посредством списания банком-партнером денежных средств с банковской карты Пользователя, привязанной к Сервису в Личном кабинете.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.5.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Оплата осуществляется Пользователем самостоятельно (оплата задолженности, отражаемой в Личном кабинете) либо посредством списания задолженности со счета, связанного с банковской картой,
              прикрепленной к Учетной записи Пользователя. Списание возможно при условии наличия заранее данного акцепта Пользователя банку, выпустившему соответствующую банковскую карту и ведущему
              банковский счет Пользователя. При наличии заранее данного акцепта получение дополнительного согласия Пользователя на совершение операции по списанию денежных средств не производится
              (безакцептное списание). Проверка наличия заранее данного акцепта Пользователя проводится банком-партнером, обеспечивающим расчеты Пользователя и Компании в порядке и на условиях,
              определенных законом и банковскими правилами.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.6.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Самостоятельная оплата Пользователем задолженности, отражаемой в Личном кабинете, производится после нажатия Пользователем активной клавиши «Оплатить» и при наличии необходимого для
              оплаты количества денежных средств на счете, связанном с банковской картой Пользователя.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.7.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Безакцептное списание денежных средств производится при возникновении у Компании оснований для их списания в соответствии с Договором и документами об использовании Сервиса, в т.ч., но
              не ограничиваясь: аренды ТС, получение сведений о нарушении Пользователем условий настоящего Договора, Договора аренды ТС, иных документов об использовании Сервиса, в т.ч. в возмещение
              убытков, взыскании неустойки (штрафов, пени). Условия возникновения соответствующих оснований определены Договором и документами об использовании Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.8.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь дает безусловное согласие на холдирование (удержание денежных средств в целях обеспечения оплаты) и/или списание в установленном Договором порядке денежных средств с
              банковской карты, прикрепленной к Учетной записи Пользователя, в счет платежей, связанных с использованием Сервиса (включая штрафы и прочие платежи). Списание / холдирование денежных
              средств в счет оплаты платежей допускается как в полном объеме, так и частями по усмотрению Компании, в т.ч. в период использования ТС.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.9.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь обязан обеспечивать достаточное количество денежных средств на связанном с Сервисом счете для совершения оплаты (в{' '}
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>т.ч.</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              {' '}
              безакцептного списания). В случае невозможности списания денежных средств со счета Пользователя (в т.ч. в связи с их недостаточностью) в течение 1 (одного) календарного дня со дня первой
              неудачной попытки списания, Компания вправе начислить неустойку в связи с неисполнением денежного обязательства.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.10. </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Возможен отказ в совершении платежа в т.ч. в случаях, когда:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>банковская карта Пользователя не предназначена для совершения платежей с использованием сети Интернет;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>на счете, связанного с банковской картой Пользователя, недостаточно средств для оплаты;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>данные банковской карты Пользователя введены неверно;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>истек срок действия банковской карты Пользователя.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.11. </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;При наличии оснований для возврата денежных средств Пользователю, такой возврат осуществляется в порядке, сроки и на условиях, определенных действующим законодательством.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>10.12. </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;Совершение платежей с использованием сети Интернет производится через банк-партнер Компании в соответствии с Правилами международных платежных систем на принципах соблюдения
              конфиденциальности и безопасности совершения платежа с использованием современных методов проверки, шифрования и передачи данных по закрытым каналам связи. Ввод и обработка данных
              банковской карты Пользователя осуществляется на защищенной платежной странице банка-партнера, предоставляющего услугу оплаты.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>11.&nbsp;&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ОТВЕТСТВЕННОСТЬ</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              За неисполнение или ненадлежащее исполнение Договора Стороны несут ответственность в соответствии с действующим законодательством Российской Федерации с дополнениями, уточнениями, и
              исключениями, определенными Договором и документами об использовании Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              За неисполнение или ненадлежащее исполнение Пользователем условий настоящего Договора, Договора аренды ТС, иных документов об использовании Сервиса, Компания вправе взыскать с
              Пользователя неустойку (штрафы, пени) в размере, определенном Положением о штрафах, а также причиненные убытки в полном объеме.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Суммы задолженности, убытков, сумм неустойки (штрафы, пени), а также суммы администрирования суммируются. Если иное не предусмотрено документами об использовании Сервиса, убытки
              взыскиваются сверх неустойки (штрафов, пени и проч.).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}11.4.&nbsp;&nbsp;&nbsp; {/*[endif]*/}
            <span style={{ color: 'black' }}>
              Использование технологий, осуществление действий, которые могут нанести вред Сайту и (или) Мобильному приложению, интересам и (или) имуществу Компании влечет за собой взыскание штрафа в
              размере 3000 (три тысячи) рублей за каждый случай нарушения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.5.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Направление сообщений, в которых содержатся нецензурные либо оскорбительные выражения, угрозы жизни, здоровью сотрудников Компании, его родственников либо изложение указанного в устной
              форме <span style={{ color: 'black' }}>влечет за собой взыскание штрафа в размере</span> 500 (пятьсот) рублей за каждый случай нарушения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.6.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Попытка заблокированного Пользователя воспользоваться Сервисом в обход устранения причин для блокирования Учетной записи, в т.ч. посредством создания новой/дополнительной Учетной записи{' '}
              <span style={{ color: 'black' }}>влечет за собой взыскание штрафа в размере</span> 40&nbsp;000 (сорок тысяч) рублей за каждый случай нарушения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              11.7.&nbsp;&nbsp;&nbsp; {/*[endif]*/}Предоставление доступа к своей Учетной записи в Сервисе третьим лицам (в т.ч. посредством передачи связанного с Сервисом Мобильного устройства,
              передачи Логина и / или Пароля), совершение Пользователем с использованием своей Учетной записи иных действий, предполагающих получение доступа третьих лиц к Сервису или к ТС под Учетной
              записью Пользователя (в т.ч. направленных на аренду ТС при фактическом использовании ТС третьим лицом) влечет за собой взыскание штрафа в размере:
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              15&nbsp;000 (пятнадцать тысяч) рублей за каждый случай нарушения – если это не повлекло за собой получение доступа к ТС (в т.ч. заключения договора аренды ТС);
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              55&nbsp;000 (пятьдесят пять тысяч) рублей за каждый случай нарушения – если это повлекло за собой получение третьим лицом доступа к ТС (в т.ч. заключения договора аренды ТС).{' '}
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Предоставление доступа к своей Учетной записи в Сервисе, в т.ч. посредством передачи связанного с Сервисом Мобильного устройства, передачи Логина и / или Пароля лицу
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              , находящемуся в состоянии алкогольного, наркотического, токсического или иного опьянения либо отказавшемуся от прохождения медицинского освидетельствования на состояние опьянения, а не
              имевшему права на управление ТС, в том числе несовершеннолетнему, недееспособному, имеющего медицинские противопоказания, а равно совершение Пользователем с использованием своей Учетной
              записи иных действий, предполагающих получение указанным третьим лицом доступа к Сервису или к ТС под Учетной записью Пользователя (в т.ч. направленных на аренду ТС при фактическом
              использовании ТС третьим лицом), влечет за собой взыскание штрафа в размере 220&nbsp;000 (двести двадцать тысяч) рублей за каждый случай нарушения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.8.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пени за просрочку исполнения денежных обязательств - 0,1 % от суммы задолженности за каждый день просрочки со дня, когда платеж должен был быть совершен.{' '}
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>11.9.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь, в т.ч. выступая как Поверенный, соглашается с тем, что Компания вправе передавать его данные в органы государственной власти в целях разрешения вопросов, связанных с
              нарушениями, допущенными им при пользовании Сервисом.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>12.&nbsp;&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>СРОК ДЕЙСТВИЯ ДОГОВОРА. ИЗМЕНЕНИЕ И ПРЕКРАЩЕНИЕ ДОГОВОРА</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Договор действует бессрочно с момента его заключения. </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Внесение изменений в Договор может осуществляться в соответствии с ч. 1 ст. 450 Гражданского кодекса Российской Федерации посредством загрузки в Мобильное приложение измененной редакции
              настоящего Договора, обеспечения возможности ознакомления с текстом предлагаемых изменений через Мобильное приложение, их принятием Пользователем и продолжением пользования Сервисом или
              отказом от Договора.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае, если действующим законодательством для Стороны допускается односторонний отказ от договора, такая Сторона вправе в одностороннем порядке отказаться от Договора, уведомив об
              этом другую Сторону с указанием даты прекращения отношений по Договору
            </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>. </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.4.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Отказ от Договора по инициативе Пользователя осуществляется на основании заявления, оформленного в соответствии с Приложением № 1 к Договору. Скан-версия заявления передается
              Пользователем Компании по электронной почте на адрес{' '}
            </span>
            <a href='mailto:info@motosoul.ru'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>info</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>@</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>motosoul</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ru</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.5.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              При отказе Пользователя от Договора таковой прекращается в момент получения Компанией уведомления об отказе от Договора (ст. 165.1 ГК РФ). Договор также прекращается в случае отзыва
              Пользователем согласия на обработку его персональных данных.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Если односторонний отказ Компании от Договора не запрещен действующим законодательством, при отказе Компании от Договора таковой прекращается в момент получения Пользователем уведомления
              об отказе от Договора (ст. 165.1 ГК РФ) и/или направленного в виде уведомления посредством Мобильного приложения MotoSoul; отображения информации в Личном кабинете; отправки Компанией
              SMS-сообщения или посредством электронной почты (по наиболее раннему событию).
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае, если на момент досрочного прекращения Договора не прекращена Сессия аренды ТС, Пользователь обязуется незамедлительно прекратить ее с соблюдением требований, установленных
              Договором. В таком случае Договор прекращается в связи с отказом при завершении Сессии аренды.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь осведомлен, что с учетом времени, необходимого для отключения Пользователя от Сервиса после возникновения соответствующих оснований, при использовании Пользователем Сервиса
              (в т.ч. заключение договора аренды ТС) до фактического отключения от Сервиса, к отношениям Сторон применяются положения Договора и Документов об использовании Сервиса.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>12.6.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              &nbsp;Прекращение Договора по любым возможным основаниям не является основанием для освобождения Стороны от исполнения обязательств по оплате (аренды, штрафов, компенсаций, комиссий и
              иных платежей), основания для которых возникли в период действия Договора либо в связи с исполнением, неисполнением, ненадлежащим исполнением Договора.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>&nbsp;</p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>13.&nbsp; &nbsp;&nbsp;</span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>БОНУСЫ И АКЦИИ</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания оставляет за собой право устанавливать и применять различные скидки, проводить акции, в т.ч. выражающиеся в предоставлении Пользователям льготных условий использования Сервиса.
              Скидки Пользователя, полученные при использовании Сервиса в качестве Поверенного, не распространяются на Пользователя, равно как скидки Пользователя, полученные им в рамках использования
              Сервиса в "Личном" режиме, не распространяются на юридическое лицо, Поверенным которого выступает Пользователь.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Скидки предоставляются по усмотрению Компании:</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>в виде Бонусов, рублевый эквивалент которых уменьшает стоимость услуг на количество Бонусов;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: 'Symbol' }}>·&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>в виде уменьшения стоимости услуг по Договору аренды ТС на сумму, равную определенному проценту от стоимости услуг.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Скидки в виде Бонусов учитываются на Бонусном счете Пользователя. В целях удобства учет Бонусов осуществляется исходя из эквивалента (1 Бонус = 1 рубль).
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.4.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Если иное прямо не предусмотрено условиями конкретной акции, скидка в виде Бонуса учитывается при оплате стоимости услуг по Договору аренды ТС с момента ее зачисления на Бонусный счет.
              Уменьшение стоимости услуг за счет Бонусов не может превышать 50 % от стоимости услуг. Использование Бонусов сопровождается уменьшением их количества на Бонусном счете. Списание с
              Бонусного счета Бонусов при оплате услуг осуществляется в первую очередь.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.5.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Если иное не предусмотрено условиями конкретной акции, скидка в процентах единоразово уменьшает стоимость услуги, приобретенную при соблюдении условий получения соответствующей скидки.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.6.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Компания вправе установить срок действия Скидки, а также наступление иных обстоятельств, по наступлении которых Скидка аннулируется и не может быть применена.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.7.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Начисление скидок в виде Бонусов на Бонусный счет, как правило, осуществляется в течение двух суток, следующих за днем выполнения Пользователем условий их получения. Использование скидок
              в виде Бонусов возможно только после их зачисления.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.8.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Скидки не выдаются в денежном или ином эквиваленте, в т.ч. после прекращения отношений по Договору. Скидки могут быть использованы только для уменьшения стоимости услуг, получаемых в
              рамках Сервиса, если иное не предусмотрено соответствующими акциями, проводимыми Компанией.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.9.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Акции утверждаются Компанией, их условия размещаются на Сайте, в Мобильном приложении.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>13.10. </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Скидки, предоставляемые не в виде Бонусов, не суммируются и могут быть использованы Пользователем только по одному основанию – по которому предоставляется максимальная скидка.
            </span>
          </p>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>&nbsp;</p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>14.&nbsp;&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПОРЯДОК РАЗРЕШЕНИЯ СПОРОВ</span>
              </strong>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>14.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Все споры и разногласия разрешаются Сторонами путем переговоров. Срок направления ответа на претензию не может превышать 10 (десять) календарных дней, если иной срок не согласован
              Сторонами или императивно не установлен действующим законодательством. Все претензии со стороны Пользователя направляются в письменном виде на почтовый адрес Компании способом,
              подтверждающим факт получения адресатом соответствующего документа и позволяющим идентифицировать отправителя и его полномочия.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>14.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Ответ на претензию Пользователя может быть направлен Компанией на электронную почту Пользователя, указанную им при регистрации в Сервисе.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>14.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае, если Стороны не пришли к решению посредством переговоров, споры и разногласия могут быть переданы на рассмотрение суда.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Если действующим законодательством для соответствующей категории споров императивно не установлена специальная (альтернативная, исключительная и проч.) подсудность, споры передаются на
              разрешение в Гагаринский районный суд г. Москвы, Судебный участок Мирового судьи № 212 по г. Москве.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Данное условие не исключает и не умаляет право Пользователя как потребителя в смысле Закона РФ «О защите прав потребителей» на выбор подсудности в случаях, когда такое право императивно
              закреплено законом.{' '}
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>14.4.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Стороны согласовали, что в случае представления интересов Пользователя третьим лицом полномочия такого представителя должны быть выражены в нотариально удостоверенной доверенности (ч. 2
              ст. 163 ГК РФ), нотариальная копия или оригинал которой предоставляется Компании.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <div
            style={{
              background: '#c4bc96',
              border: 'solid windowtext 1.0pt',
              msoBackgroundThemecolor: 'background2',
              msoBackgroundThemeshade: 191,
              msoBorderAlt: 'solid windowtext .5pt',
              msoElement: 'para-border-div',
              padding: '1.0pt 4.0pt 1.0pt 4.0pt',
            }}>
            <p style={{ marginLeft: '0cm', textAlign: 'center' }}>
              {/*[if !supportLists]*/}
              <strong>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>15.&nbsp;&nbsp;&nbsp; </span>
              </strong>
              {/*[endif]*/}
              <strong>
                <span style={{ color: 'black', fontFamily: '"Times New Roman",serif' }}>ПРОЧИЕ УСЛОВИЯ</span>
              </strong>
            </p>
          </div>
          <p style={{ marginLeft: '35.45pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.1.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Пользователь соглашается на направление ему Компанией информационных сообщений уведомительного характера, в </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>т.ч.</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              {' '}
              касающихся исполнения Договора MotoSoul, Договора аренды ТС, услуг Компании и статуса регистрации в Сервисе (<u>за исключением рекламных сообщений)</u> посредством:
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- звонков, голосовых и </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>SMS</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>-сообщений на контактный номер мобильного телефона, предоставленный Пользователем Компании;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- </span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>push</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>-уведомлений на Мобильное устройство,</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- писем на указанный Пользователем адрес электронной почты;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>- сообщений (в т.ч. голосовых), звонков, направляемых (совершаемых) с использованием сервисов мгновенного обмена сообщениями.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>В целях отказа от информирования Пользователь может направить Компании сообщение на </span>
            <a href='mailto:info@motosoul.ru'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>info</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>@</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>motosoul</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ru</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              {' '}
              об отказе <u>от получения сообщений уведомительного характера</u>. При получении отказа от информирования Компания исключает Пользователя из рассылки информационных сообщений, за
              исключением тех сообщений, для направления которых действующее законодательство не предусматривает необходимость получения согласия Пользователя. При этом Пользователь осознает, что
              предоставление Сервиса без получения уведомлений, связанных с исполнением Договора MotoSoul, Договора аренды ТС, может оказаться невозможным.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь признает и соглашается с тем, что при прекращении оснований для направления информационных сообщений уведомительного характера Компании требуется до 24 часов для исключения
              Пользователя из списка адресатов информационных сообщений уведомительного характера, что обусловлено технической составляющей организации сервиса «MotoSoul». Направление Пользователю в
              указанный период информационных сообщений уведомительного характера Стороны не рассматривают как нарушение прав Пользователя.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Настоящее согласие в полной мере распространяется на направление сообщений Пользователю в связи с использованием им Сервиса в качестве Поверенного.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.2.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Любая переписка, телефонные и иные переговоры, имевшие место до заключения Договора, теряют юридическую силу с момента заключения Договора.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              15.3. С момента заключения Договора Стороны признают юридическую силу за сообщениями (за исключением сообщений Пользователя о прекращении Договора, претензий Пользователя, а также любых
              документов от Пользователя, направление которых прямо не предусмотрено Договором и документами об использовании Сервиса), направленными по электронной почте, содержащейся в Учетной
              записи Пользователя.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Стороны заявляют и констатируют, что в случае наступления обстоятельства наличия непогашенной задолженности Пользователя (отлагательное условие) в соответствии с документами об
              использовании сервиса Компания вправе исполнить обязанность по уведомлению пользователя о привлечении третьих лиц для взаимодействия с Пользователем (ч. 1 ст. 9 Федерального закона от
              «03» июля 2016 г. № 230-ФЗ «О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности и о внесении изменений в Федеральный
              закон «О микрофинансовой деятельности и микрофинансовых организациях») посредством направления уведомления на адрес электронной почты, содержащейся в Учетной записи Пользователя.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Стороны соглашаются с тем, что указанные сообщения (уведомления) являются равнозначными документам, составленным на бумажных носителях и подписанным собственноручной подписью
              соответствующего уполномоченного лица постольку, поскольку только уполномоченные на подписание соответствующих документов лица имеют доступ к соответствующим информационным системам,
              адресам электронной почты, обязуются сохранять пароли к электронной почте в тайне и не допускать к их использованию третьих лиц.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.3.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Сообщения, направленные Пользователю на электронную почту, считаются полученными адресатом в момент их отправки. Компания вправе оставить без ответа по существу сообщения, на которые
              ранее были даны ответы либо в которых содержатся нецензурные, оскорбительные выражения, угрозы жизни, здоровью сотрудников Компании, имуществу Компании или ее сотрудников, сообщив
              обращающемуся о недопустимости такого поведения.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.4.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Пользователь обязуется уведомлять Компанию об изменении места жительства (регистрации), места пребывания, контактных номеров телефонов, адреса электронной почты, о перемене имени,
              фамилии, изменении реквизитов документа, удостоверяющего личность, изменении реквизитов или лишении водительского удостоверения, иных данных, предоставленных Пользователем Компании;
              сведений о раскрытии третьим лицам Логина и (или) Кода подтверждения, равно как об их утрате или о любых обстоятельствах, которые ставят под угрозу сохранение Логина, Кода подтверждения
              в тайне – обратившись в Информационный центр. Компания не несет ответственность за какие-либо последствия, связанные с изменением указанных в настоящем пункте Договора данных
              Пользователя, а также за совершение действий с Учетной записью, если Пользователь не оповестил Компанию об указанных в настоящем пункте Договора обстоятельствах, и (или) предоставил
              Компании неверные данные.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.5.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В случае уступки Компанией прав по настоящему Договору Компания вправе не направлять Пользователю уведомления об этом. Настоящим Пользователь соглашается не получать каких-либо
              уведомлений о совершенной Компанией уступке в соответствии с настоящим пунктом Договора. Уступка Пользователем прав по настоящему Договору третьим лицам не допускается.
            </span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.6.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>К отношениям Сторон не применяются положения ст. 317.1 ГК РФ.</span>
          </p>
          <p style={{ marginLeft: '0cm', textAlign: 'justify' }}>
            {/*[if !supportLists]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>15.7.&nbsp;&nbsp;&nbsp; </span>
            {/*[endif]*/}
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              В части, не урегулированной Договором и приложениями к нему, отношения Сторон регулируются действующим законодательством Российской Федерации.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            className='MsoTableGrid'
            style={{
              borderCollapse: 'collapse',
              border: 'none',
              msoBorderInsideh: 'none',
              msoBorderInsidev: 'none',
              msoPaddingAlt: '0cm 5.4pt 0cm 5.4pt',
              msoYftiTbllook: 1184,
              width: '544.65pt',
            }}>
            <tbody>
              <tr>
                <td style={{ width: '544.65pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <strong>
                      <span style={{ fontFamily: '"Times New Roman",serif' }}>Форма для электронного подписания:</span>
                    </strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Присоединился (ст. 428 ГК РФ). Документы (в т.ч. формы) подписаны&nbsp;Арендатором (Поверенным) электронной подписью в соответствии с Договором MotoSoul (
            </span>
            <a href='https://motosoul.ru/terms/contract'>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>https</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>://</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>motosoul</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ru</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>/</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>terms</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>/</span>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>contract</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>)</span>
          </p>
          <table
            border={1}
            cellPadding={0}
            cellSpacing={0}
            className='MsoTableGrid'
            style={{
              borderCollapse: 'collapse',
              border: 'none',
              marginLeft: '-.25pt',
              msoBorderAlt: 'solid windowtext .5pt',
              msoPaddingAlt: '0cm 5.4pt 0cm 5.15pt',
              msoYftiTbllook: 1184,
              width: '320.25pt',
            }}>
            <tbody>
              <tr>
                <td style={{ height: '72.7pt', width: '320.25pt' }}>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ФИО Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      Логин Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ID Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ID
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {' '}
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      аренды: ${'{'}
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      rent
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      _
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      id
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {'}'}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      Электронная
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {' '}
                      подпись:{' '}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p>&nbsp;</p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ color: '#172b4d', fontSize: '10.5pt' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '11cm', textAlign: 'right' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>УТВЕРЖДЕНО </span>
            </strong>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Приказом № ДД-28</span>
          </p>
          <p style={{ marginLeft: '11cm', textAlign: 'right' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>от «18» ноября 2019 г.</span>
          </p>
          <p style={{ marginLeft: '11cm', textAlign: 'right' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>(в редакции Приказа № ДД-30 от «06» декабря 2019 г., вступило в силу 00:00 11.12.2019)</span>
          </p>
          <p style={{ marginLeft: '276.45pt', textAlign: 'justify' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </strong>
          </p>
          <p style={{ marginLeft: '276.45pt', textAlign: 'justify' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>Приложение № 1 к Договору MotoSoul</span>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ЗАЯВЛЕНИЕ</span>
            </strong>
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>ОБ ОТКАЗЕ ОТ ДОГОВОРА</span>
            </strong>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>_______________________________________________________________________________________________</span>
            </strong>
          </p>
          <p style={{ marginLeft: '70.8pt', textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>(фамилия, имя, отчество (если имеется))</span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              ___________________________________________________________________________ (<em>далее – Пользователь</em>)
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>паспорт Пользователя серия _______ номер ___________________, выдан ___________________________________ </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>______________________________________________________________________________________________</span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (кем выдан)
              </span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>______________________________________________________________________________________________</span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              «___» _______________ _____________ г. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _________-________
            </span>
          </p>
          <p style={{ marginLeft: '35.4pt', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              (<em>когда выдан</em>)
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;(<em>код подразделения</em>)
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Адрес регистрации Пользователя по месту жительства: ___________________________________________________</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <em>
              <span style={{ fontFamily: '"Times New Roman",serif' }}>______________________________________________________________________________________________,</span>
            </em>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Водительское удостоверение _______________________________ от «__» _______ ______ г.</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>Телефон Пользователя, к которому имеет доступ только Пользователь: _________________________________,</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>E</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>-</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>mail</span>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              {' '}
              Пользователя, доступ к которому осуществляется по паролю, известному Пользователю, который он обязуется сохранять в тайне
              ______________________________________________________________________.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Уведомляю Общество с ограниченной ответственностью «Каршеринг Руссия» (<span style={{ color: 'black' }}>ИНН </span>9705034527, ОГРН{' '}
              <span style={{ color: '#1a1a1a' }}>1157746288083) </span>(далее – ООО «Каршеринг Руссия») об отказе от Договора MotoSoul) с «___» ___________ 20__ г.
            </span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ marginLeft: '35.4pt', marginRight: '0cm', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;&nbsp; __________________</span>
          </p>
          <p style={{ marginLeft: '70.8pt', marginRight: '0cm', textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>(подпись)</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            className='MsoTableGrid'
            style={{
              borderCollapse: 'collapse',
              border: 'none',
              msoBorderInsideh: 'none',
              msoBorderInsidev: 'none',
              msoPaddingAlt: '0cm 5.4pt 0cm 5.4pt',
              msoYftiTbllook: 1184,
              width: '544.65pt',
            }}>
            <tbody>
              <tr>
                <td style={{ width: '304.8pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <strong>
                      <span style={{ fontFamily: '"Times New Roman",serif' }}>Форма утверждена</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{ width: '304.8pt' }}>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
                  </p>
                </td>
                <td style={{ width: '239.85pt' }}>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>
              Присоединился (ст. 428 ГК РФ). Документы (в т.ч. формы) подписаны&nbsp;Пользователем (Поверенным) электронной подписью в соответствии с Договором MotoSoul (
            </span>
            <a href='https://motosoul.ru/terms/contract'>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>https</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>://</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>motosoul</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>.</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>ru</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>/</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>terms</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>/</span>
              <span style={{ fontFamily: '"Times New Roman",serif', fontSize: '10.5pt' }}>contract</span>
            </a>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>)</span>
          </p>
          <table
            border={1}
            cellPadding={0}
            cellSpacing={0}
            className='MsoTableGrid'
            style={{
              borderCollapse: 'collapse',
              border: 'none',
              marginLeft: '-.25pt',
              msoBorderAlt: 'solid windowtext .5pt',
              msoPaddingAlt: '0cm 5.4pt 0cm 5.15pt',
              msoYftiTbllook: 1184,
              width: '320.25pt',
            }}>
            <tbody>
              <tr>
                <td style={{ height: '72.7pt', width: '320.25pt' }}>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ФИО Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      Логин Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ID Пользователя:{' '}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      ID
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {' '}
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      аренды: ${'{'}
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      rent
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      _
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      id
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {'}'}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      Электронная
                    </span>
                    <span
                      style={{
                        color: '#0070c0',
                        fontFamily: '"Times New Roman",serif',
                      }}>
                      {' '}
                      подпись:{' '}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>
            <span style={{ fontFamily: '"Times New Roman",serif' }}>&nbsp;</span>
          </p>
          <p>
            <span
              style={{
                color: '#172b4d',
                fontFamily: '"Times New Roman",serif',
                fontSize: '10.5pt',
              }}>
              &nbsp;
            </span>
          </p>
          <p>
            <span
              style={{
                color: '#172b4d',
                fontFamily: '"Times New Roman",serif',
                fontSize: '10.5pt',
              }}>
              &nbsp;
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
