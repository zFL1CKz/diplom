import React from 'react'
import { useHistory } from 'react-router-dom'
import { Back } from '../../components/Back/Back'
import logo from '../../img/icons/small--logo.svg'
import './Terms.scss'

export const UserAgreement = () => {
  const history = useHistory()

  return (
    <div className='container'>
      <header className='header'>
        <div
          onClick={() => {
            history.goBack()
          }}>
          <Back />
        </div>
        <div className='body__title'>Пользовательское соглашение</div>
        <img src={logo} alt='logo' />
      </header>

      <section className='terms'>
        <div className='terms__title'>Пользовательское соглашение</div>
        <div>
          <div className='terms__approved'>
            <p align='right'>
              <strong>Утверждено Приказом № ДД-61 от «21» июня 2021 г.</strong>
            </p>
            <p align='right'>
              <strong>(в ред. Приказа № ДД-69 от 30.03.2022 г., вступило в силу в 00:00 01.04.2022 г.)</strong>
            </p>
          </div>

          <p>
            <strong>
              <u> </u>
            </strong>
          </p>
          <p>
            <strong>
              <u> </u>
            </strong>
          </p>
          <div>
            <p align='center'>
              <strong>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</strong>
            </p>
          </div>
          <p>Пожалуйста, прежде чем приступить к использованию Мобильного приложения Делимобиль, внимательно прочитайте настоящее Пользовательское соглашение (далее – Пользовательское соглашение).</p>
          <p>В случае размещения текста настоящего Пользовательского соглашения на иностранном языке, во избежание противоречий приоритет остается за русскоязычной версией.</p>
          <div>
            <p align='center'>
              <strong>1. </strong>
              <strong>ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</strong>
            </p>
          </div>
          <p>
            1.1. Компания – общество с ограниченной ответственностью «Каршеринг Руссия» (ОГРН 1157746288083, ИНН 9705034527), а также, в применимой части, иное лицо, которому общество с ограниченной
            ответственностью «Каршеринг Руссия» уступило свои права по Договору, либо лицо, кому права ООО «Каршеринг Руссия» перешли по иным основаниям.
          </p>
          <p>
            1.2. Сервис Делимобиль (Сервис) – программный комплекс, включающий в себя WEB-интерфейс, размещенный в сети Интернет по адресу
            <a href=''>https://delimobil.ru</a>, а также Мобильное приложение Делимобиль, обеспечивающий, в т.ч.:
          </p>
          <p>- ознакомление с размещением и характеристиками ТС, предоставляемых для аренды на условиях Договора аренды ТС, на интерактивной карте в Мобильном приложении;</p>
          <p>- бронирование ТС (заключение Предварительного договора аренды ТС);</p>
          <p>- аренду ТС (заключение Основного договора аренды ТС), изменение режимов аренды;</p>
          <p>- интерактивное взаимодействие с ТС в пределах функционала Мобильного приложения;</p>
          <p>
            - формирование электронной подписи, организацию подписания и направления электронных документов между Сторонами, а также подтверждения совершения действий в Мобильном приложении (на
            Сайте);
          </p>
          <p>- совершение платежей в соответствии с настоящим Договором и договорам, заключаемым в рамках Сервиса, иными документами об использовании Сервиса;</p>
          <p>
            - совершение юридически значимых действий, направленных на возникновение, изменение, прекращение отношений по настоящему Пользовательскому соглашению и договорам, заключаемым в рамках
            Сервиса, иным документам об использовании Сервиса.
          </p>
          <p>
            1.3. Пользователь – лицо, заключившее настоящее Пользовательское соглашение посредством присоединения к нему, в т.ч. осуществившее запуск Мобильного приложения на Мобильном устройстве.
          </p>
          <p>
            1.4. Сайт – <a href=''>https://delimobil.ru</a>.
          </p>
          <p>
            1.5. Регистрация в Сервисе – осуществление Пользователем действий, предусмотренных инструкциями, изложенными в Договоре, и направленных на подключение к Сервису. При регистрации
            Пользователю присваивается уникальный ID Пользователя.
          </p>
          <p>1.6. Активация в Сервисе – подключение Пользователя к Сервису по результатам Регистрации, создание Учетной записи Пользователя, организация доступа к использованию Сервиса.</p>
          <p>1.7. Личный кабинет – индивидуальный раздел в Мобильном приложении, доступ в который осуществляется Пользователем после авторизованного входа в Мобильное приложение.</p>
          <p>
            1.8. Логин – контактный номер мобильного телефона Пользователя, вводимый Пользователем для доступа в Мобильное приложение от имени конкретного Пользователя (под Учетной записью
            Пользователя).
          </p>
          <p>
            1.9. Код подтверждения - уникальная последовательность символов, автоматически сгенерированная Программным обеспечением при доступе в Мобильное приложение и Личный кабинет от имени
            конкретного Пользователя (под Учетной записью Пользователя), и направляемая в виде СМС-сообщения на Мобильное устройство, с которого осуществляется доступ в Мобильное приложение.
          </p>
          <p>1.10. Учетная запись – совокупность данных о Пользователе, служащая для совершения действий в рамках Сервиса от имени Пользователя.</p>
          <p>
            1.11. Электронная подпись (Пользователя) - персональная информация о Пользователе в электронной форме, присоединяемая к подписываемой информации (документу) и используемая для
            подтверждения факта совершения Пользователем действий в Мобильном приложении. Представляет собой зашифрованные сведения о Пользователе в Сервисе, в т.ч. ID Пользователя. Применительно к
            событиям, связанным с Сессией аренды, применяется также ID аренды, связанный с ID Пользователя.
          </p>
          <p>1.12. Ключ электронной подписи – уникальная последовательность символов, предназначенная для создания Электронной подписи.</p>

          <p>1.14. Мобильное устройство - электронное устройство (смартфон, мобильный телефон), работающее на базе операционных систем iOS или Android.</p>
          <p>1.15. Документы об использовании Сервиса:</p>
          <p>
            <u>- Договор Делимобиль;</u>
          </p>
          <p>
            <u>- Положение о тарифах;</u>
          </p>
          <p>
            <u>- формы заявлений, актов и проч. документов;</u>
          </p>
          <p>
            <u>- Договор аренды ТС (Предварительный договор аренды ТС, Основной договор аренды ТС);</u>
          </p>
          <p>
            <u>- Положение о территориальных ограничениях в использовании ТС (приложение к Договору аренды ТС);</u>
          </p>
          <p>
            <u>- Положение о штрафах (приложение к Договору аренды ТС);</u>
          </p>
          <p>
            <u>- Инструкция по определению нормального износа (приложение к Договору аренды ТС);</u>
          </p>
          <p>
            <u>- Акт приема-передачи и Акт возврата транспортного средства (приложение к Договору аренды ТС).</u>
          </p>
          <p>
            Термины и определения, не раскрытые в настоящем Пользовательском соглашении, применяются в значении, определенном документами об использовании Сервиса (в т.ч. Договором Делимобиль,
            Договором аренды ТС и иными документами об использовании сервиса).
          </p>
          <div>
            <p align='center'>
              <strong>2. </strong>
              <strong>ОБЩИЕ УСЛОВИЯ</strong>
            </p>
          </div>
          <p>2.1. Начиная использовать Мобильное приложение в любой форме и в любом объеме Вы:</p>
          <p>2.1.1. подтверждаете, что Вы в полном объеме ознакомились с содержанием настоящего Пользовательского соглашения;</p>
          <p>2.1.2. выражаете свое полное и безусловное согласие с условиями, изложенными в настоящем Пользовательском соглашении, без каких-либо оговорок и изъятий;</p>
          <p>2.1.3. принимаете на себя обязательство исполнять Пользовательское соглашение, нести ответственность за неисполнение изложенных в нем требований и условий;</p>
          <p>
            2.1.4. признаете юридическую силу за документами, направленными Вами посредством Мобильного приложения как за собственноручно подписанными документами, за действиями, совершенными
            посредством Мобильного приложения;
          </p>
          <p>
            2.1.5. соглашаетесь с тем, что программное обеспечение постоянно совершенствуется, в связи с чем возможны технические проблемы в функционировании. Вы используете Мобильное приложение «как
            есть» без гарантий со Стороны Компании отсутствия ошибок в работе программного обеспечения.
          </p>
          <p>2.2. В случае несогласия с изложенными в настоящем разделе условиями Вы обязаны незамедлительно прекратить использование Мобильного приложения.</p>
          <p>
            2.3. В целях подтверждения того, что действия с использованием Мобильного приложения осуществляются Вами как владельцем Мобильного устройства, используются различные методы, обеспечивающие
            связь Мобильного приложения с конкретным пользователем, в т.ч.: направление Кода подтверждения на Мобильное устройство, с которого осуществляется доступ в Мобильное приложение, связь его с
            логином (номером контактного телефона, предоставленного Вами) и проч.
          </p>
          <p>
            2.4. При входе Пользователя в Мобильное приложение либо в Личный кабинет с использованием пары "Логин + Код подтверждения" формируется ключ простой Электронной подписи, который позволяет
            определить Пользователя при взаимодействии с системой (ID Пользователя), в том числе при совершении юридически значимых действий в системе.
          </p>
          <p>
            2.5. Для работы с системой и установления связи Пользователя с Ключом электронной подписи Пользователь вводит известные только ему Логин и Код подтверждения при авторизации. Указанная пара
            "Логин + Код подтверждения" является необходимым и уникальным условием для создания Электронной подписи и подписания юридически значимых документов, совершения юридически значимых
            действий. Подписание документов Электронной подписью и совершение юридически значимых действий с использованием Электронной подписи приравнивается к подписанию документов личной подписью
            Пользователя (Поверенного) и совершению иных юридически значимых действий от имени Пользователя. Информация в электронной форме, подписанная Электронной подписью, созданной в соответствии
            с настоящим пунктом Договора, признается электронным документом, равнозначным документу на бумажном носителе, подписанному собственноручной подписью.
          </p>
          <p>
            2.6. Нажатие Пользователем активных клавиш в Мобильном приложении создает Электронную подпись с использованием Ключа электронной подписи в порядке, определенном в настоящем пункте
            Договора, и представляет собой электронное подписание документов, электронное подтверждение совершения действий в Мобильном приложении.
          </p>
          <p>
            2.7. Риск разглашения сведений пары "Логин + Код подтверждения" несет Пользователь, включая, но не ограничиваясь риском выбытия из владения Пользователя электронного устройства с
            работающим Мобильным приложением под Учетной записью Пользователя. Все действия, совершенные через Мобильное приложение или в Личном кабинете, считаются совершенными Пользователем.
          </p>
          <p>
            2.8. Приведенные в Документах об использовании Сервиса названия активных клавиш, применяемые в Мобильном приложении, могут изменяться в зависимости от версии Мобильного приложения. Однако
            семантическое значение неизменно.
          </p>
          <div>
            <p align='center'>
              <strong>3. </strong>
              <strong>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</strong>
            </p>
          </div>
          <p>
            3.1. Компания предоставляет Вам право использовать Мобильное приложение в объеме, предусмотренном функциональными возможностями Мобильного приложения в соответствии с Вашим уровнем доступа
            (до прохождения регистрации в сервисе Делимобиль, после начала процедуры регистрации, после заключения Договора Делимобиль и активации в сервисе Делимобиль, после заключения Договора
            аренды транспортного средства),
            <a href=''>ограниченного исполнением обязательств Сторон, которые могут возникнуть в рамках соответствующих уровней доступа</a>.
          </p>
          <p>3.2. Вам предоставляется право использовать Мобильное приложение безвозмездно на условиях простой неисключительной лицензии.</p>
          <p>
            3.3. Использование Мобильного приложения допускается только способами, предусмотренными его функциональными возможностями и соответствующим уровнем доступа. Само по право использования
            Мобильного приложения без заключения договоров об использовании отдельных сервисов не предоставляет Вам право на получение услуг Сервиса.
          </p>
          <p>
            3.4. Предоставляемое право использовать Мобильное приложение не означает приобретение Вами каких-либо иных прав, выходящих за пределы, указанные в настоящем разделе, равно как не
            предоставляет возможности отчуждать, предоставлять третьим лицам или уступать указанные права, передавать их в залог или использовать их иными способами, прямо не указанными в настоящем
            разделе.
          </p>
          <p>
            3.5. В любом случае Вам не разрешается вносить изменения в Мобильное приложение, декомпилировать, дизассемблировать, осуществлять реверс-инжиниринг, распространять Мобильное приложение или
            его отдельных элементов, равно как предоставлять доступ к нему третьим лицам, в т.ч. с Вашей Учетной записью.
          </p>
          <p>
            3.6. Приступая к использованию Мобильного приложения, Вы гарантируете, что не будете использовать Мобильное приложение с нарушением требований действующего законодательства, условий
            настоящего Пользовательского соглашения, а также документов об использовании Сервиса, не будете выходить за границы функционала Сервиса, в т.ч. в целях причинения вреда Компании или
            третьим лицам.
          </p>
          <p>
            3.7. Все составляющие Мобильного приложения, в т.ч. элементы дизайна, текст, графические изображения, скрипты, программы, базы данных и иные объекты, составляющие Мобильное приложение,
            являются объектами исключительных прав Компании и других правообладателей.
          </p>
          <div>
            <p align='center'>
              <strong>4. </strong>
              <strong>ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ</strong>
            </p>
          </div>
          <p>4.1. Мобильное приложение предоставляются «как есть».</p>
          <p>4.2. Все действия, исходящие с Мобильного устройства, на котором установлено Мобильное приложение, считаются исходящими от Вас.</p>
          <p>
            4.3. Компания не гарантирует, что Мобильное приложение будет работать беспрерывно, быстро, не будут содержать ошибок или будет соответствовать Вашим целям и ожиданиям. Вы соглашаетесь и
            подтверждаете, что используете Мобильное приложение исключительно на свой собственный риск.
          </p>
          <div>
            <p align='center'>
              <strong>5. </strong>
              <strong>ФУНКЦИОНАЛ МОБИЛЬНОГО ПРИЛОЖЕНИЯ</strong>
            </p>
          </div>
          <p>5.1. Мобильное приложение предназначено для:</p>
          <p>5.1.1. получения информации о Компании, ознакомления с услугами, оказываемыми Компанией;</p>
          <p>5.1.2. совершения действий, направленных на регистрацию в Сервисе и заключение Договора Делимобиль, Договора аренды ТС (Предварительного и Основного), иных договоров в рамках Сервиса;</p>
          <p>5.1.3. совершения действий, обусловленных Договором Делимобиль, Договором аренды ТС (Предварительного и Основного), иными договорами в рамках Сервиса.</p>
          <p>
            5.2. Прежде чем совершать действия, направленные на заключение указанных договоров, Вы обязуетесь изучить их условия, а также положения иных документов об использовании Сервиса,
            размещенных в сети Интернет по адресу
            <a href=''>https://delimobil.ru</a>, и принять осознанное решение об использовании Сервиса.
          </p>
          <p>Компания в соответствии со ст. 421 ГК РФ свободна в заключении договоров об использовании Сервиса и самостоятельно определяет основания для отказа в их заключении.</p>
          <p>
            5.3. В случае, если Вы получили доступ к Сервису и функциональным возможностям Мобильного приложения по его использованию без указанных в настоящем разделе оснований, Вы обязаны
            незамедлительно сообщить об этом Компании и обязуетесь не использовать возможности, открытые таким доступом. В противном случае все действия, совершенные через Мобильное приложение от
            Вашего имени, будут расцениваться как действия, совершенные непосредственно Вами.
          </p>
          <p>
            5.4. В случае заключения договоров об использовании Сервиса к отношениям по использованию Мобильного приложения применяются также положения соответствующего Договора (в т.ч. в части
            функциональных возможностей Мобильного приложения).
          </p>
          <p>
            5.5. Регистрация, активация в Сервисе, совершение иных действий в рамках Сервиса регламентируются соответствующими документами об использовании Сервиса: Договором Делимобиль, Договором
            аренды ТС и иными документами об использовании сервиса.
          </p>
          <p>
            <strong> </strong>
          </p>
          <div>
            <p align='center'>
              <strong>6. </strong>
              <strong>УВЕДОМЛЕНИЯ</strong>
            </p>
          </div>
          <p>
            <a>
              6.1. Вы соглашаетесь на направление Вам Компанией информационных сообщений уведомительного характера, в т.ч. касающихся исполнения Договора Делимобиль, Договора аренды ТС (в т.ч.
              сервисных сообщений), услуг Компании и статуса регистрации в Сервисе ( <u>за исключением рекламных сообщений)</u> посредством:
            </a>
          </p>
          <p>- звонков, голосовых и SMS-сообщений на контактный номер мобильного телефона, предоставленный Вами Компании;</p>
          <p>- push-уведомлений на Мобильное устройство;</p>
          <p>- писем на указанный Вами адрес электронной почты;</p>
          <p>- сообщений (в т.ч. голосовых), звонков, направляемых (совершаемых) с использованием сервисов мгновенного обмена сообщениями.</p>
          <p>
            В целях отказа от информирования Вы можете направить нам сообщение на<a href=''>info@delimobil.ru</a> об отказе <u>от получения информационных сообщений уведомительного характера</u>. При
            получении отказа от информирования Компания исключает Вас из рассылки информационных сообщений, за исключением тех сообщений, для направления которых действующее законодательство не
            предусматривает необходимость получения Вашего согласия. При этом Вы осознаете, что предоставление Сервиса без получения уведомлений, связанных с исполнением Договора Делимобиль, Договора
            аренды ТС, может оказаться невозможным.
          </p>
          <p>
            <a>
              Вы признаете и соглашаетесь с тем, что при прекращении оснований для направления информационных сообщений уведомительного характера Компании требуется до 24 часов для исключения Вас из
              списка адресатов информационных сообщений уведомительного характера, что обусловлено технической составляющей организации сервиса «Делимобиль». Направление Вам в указанный период
              информационных сообщений уведомительного характера Стороны не рассматривают как нарушение прав Пользователя.
            </a>
          </p>
          <p>
            6.2. При Вашем нахождении за пределами территории Российской Федерации или при использовании Вами номера мобильного телефона зарубежного оператора мобильной связи в качестве контактного
            номера мобильного телефона, а также для целей получения SMS-сервиса и (или) Кода подтверждения, в силу особенностей работы систем операторов мобильной связи увеличивается риск
            несвоевременного получения или неполучения Вами SMS-сообщений от Компании. Вы уведомлены о данном риске, полностью его понимаете и учитываете при выезде за границу, а также при указании
            Компании своего номера мобильного телефона в качестве контактного номера мобильного телефона, а также для целей получения SMS-сервиса и (или) Кода подтверждения.
          </p>
        </div>
      </section>
    </div>
  )
}
