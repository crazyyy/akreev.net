<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$wpaicg_chat_language = 'en';
$_wporg_writing_tone = 'formal';
$_wporg_writing_style = 'infor';
?>
<form class="wpaicg-help-form" data-form="autogpt">
    <input type="hidden" name="action" value="wpaicg_help_autogpt">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-autogpt-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-autogpt-language"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-autogpt-language" style="display: none">
        <div class="wpaicg-mb-10 wpaicg-help-field">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Language','gpt3-ai-content-generator')?></strong></label><br/>
            <select name="autogpt[language]">
                <option value="en" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'en' ? 'selected' : '' ) ;
                ?>>English</option>
                <option value="af" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'af' ? 'selected' : '' ) ;
                ?>>Afrikaans</option>
                <option value="ar" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ar' ? 'selected' : '' ) ;
                ?>>Arabic</option>
                <option value="bg" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'bg' ? 'selected' : '' ) ;
                ?>>Bulgarian</option>
                <option value="zh" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'zh' ? 'selected' : '' ) ;
                ?>>Chinese</option>
                <option value="hr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hr' ? 'selected' : '' ) ;
                ?>>Croatian</option>
                <option value="cs" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'cs' ? 'selected' : '' ) ;
                ?>>Czech</option>
                <option value="da" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'da' ? 'selected' : '' ) ;
                ?>>Danish</option>
                <option value="nl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'nl' ? 'selected' : '' ) ;
                ?>>Dutch</option>
                <option value="et" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'et' ? 'selected' : '' ) ;
                ?>>Estonian</option>
                <option value="fil" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fil' ? 'selected' : '' ) ;
                ?>>Filipino</option>
                <option value="fi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fi' ? 'selected' : '' ) ;
                ?>>Finnish</option>
                <option value="fr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fr' ? 'selected' : '' ) ;
                ?>>French</option>
                <option value="de" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'de' ? 'selected' : '' ) ;
                ?>>German</option>
                <option value="el" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'el' ? 'selected' : '' ) ;
                ?>>Greek</option>
                <option value="he" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'he' ? 'selected' : '' ) ;
                ?>>Hebrew</option>
                <option value="hi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hi' ? 'selected' : '' ) ;
                ?>>Hindi</option>
                <option value="hu" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hu' ? 'selected' : '' ) ;
                ?>>Hungarian</option>
                <option value="id" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'id' ? 'selected' : '' ) ;
                ?>>Indonesian</option>
                <option value="it" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'it' ? 'selected' : '' ) ;
                ?>>Italian</option>
                <option value="ja" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ja' ? 'selected' : '' ) ;
                ?>>Japanese</option>
                <option value="ko" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ko' ? 'selected' : '' ) ;
                ?>>Korean</option>
                <option value="lv" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'lv' ? 'selected' : '' ) ;
                ?>>Latvian</option>
                <option value="lt" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'lt' ? 'selected' : '' ) ;
                ?>>Lithuanian</option>
                <option value="ms" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ms' ? 'selected' : '' ) ;
                ?>>Malay</option>
                <option value="no" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'no' ? 'selected' : '' ) ;
                ?>>Norwegian</option>
                <option value="fa" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fa' ? 'selected' : '' ) ;
                ?>>Persian</option>
                <option value="pl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'pl' ? 'selected' : '' ) ;
                ?>>Polish</option>
                <option value="pt" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'pt' ? 'selected' : '' ) ;
                ?>>Portuguese</option>
                <option value="ro" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ro' ? 'selected' : '' ) ;
                ?>>Romanian</option>
                <option value="ru" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ru' ? 'selected' : '' ) ;
                ?>>Russian</option>
                <option value="sr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sr' ? 'selected' : '' ) ;
                ?>>Serbian</option>
                <option value="sk" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sk' ? 'selected' : '' ) ;
                ?>>Slovak</option>
                <option value="sl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sl' ? 'selected' : '' ) ;
                ?>>Slovenian</option>
                <option value="sv" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sv' ? 'selected' : '' ) ;
                ?>>Swedish</option>
                <option value="es" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'es' ? 'selected' : '' ) ;
                ?>>Spanish</option>
                <option value="th" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'th' ? 'selected' : '' ) ;
                ?>>Thai</option>
                <option value="tr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'tr' ? 'selected' : '' ) ;
                ?>>Turkish</option>
                <option value="uk" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'uk' ? 'selected' : '' ) ;
                ?>>Ukrainian</option>
                <option value="vi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'vi' ? 'selected' : '' ) ;
                ?>>Vietnamese</option>
            </select>
        </div>
        <div class="wpaicg-mb-10 wpaicg-help-field">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Style','gpt3-ai-content-generator')?></strong></label><br/>
            <select name="autogpt[style]">
                <option value="infor" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'infor' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Informative','gpt3-ai-content-generator')?></option>
                <option value="acade" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'acade' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Academic','gpt3-ai-content-generator')?></option>
                <option value="analy" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'analy' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Analytical','gpt3-ai-content-generator')?></option>
                <option value="anect" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'anect' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Anecdotal','gpt3-ai-content-generator')?></option>
                <option value="argum" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'argum' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Argumentative','gpt3-ai-content-generator')?></option>
                <option value="artic" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'artic' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Articulate','gpt3-ai-content-generator')?></option>
                <option value="biogr" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'biogr' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Biographical','gpt3-ai-content-generator')?></option>
                <option value="blog" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'blog' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Blog','gpt3-ai-content-generator')?></option>
                <option value="casua" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'casua' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Casual','gpt3-ai-content-generator')?></option>
                <option value="collo" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'collo' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Colloquial','gpt3-ai-content-generator')?></option>
                <option value="compa" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'compa' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Comparative','gpt3-ai-content-generator')?></option>
                <option value="conci" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'conci' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Concise','gpt3-ai-content-generator')?></option>
                <option value="creat" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'creat' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Creative','gpt3-ai-content-generator')?></option>
                <option value="criti" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'criti' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Critical','gpt3-ai-content-generator')?></option>
                <option value="descr" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'descr' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Descriptive','gpt3-ai-content-generator')?></option>
                <option value="detai" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'detai' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Detailed','gpt3-ai-content-generator')?></option>
                <option value="dialo" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'dialo' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Dialogue','gpt3-ai-content-generator')?></option>
                <option value="direct" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'direct' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Direct','gpt3-ai-content-generator')?></option>
                <option value="drama" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'drama' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Dramatic','gpt3-ai-content-generator')?></option>
                <option value="emoti" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'emoti' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Emotional','gpt3-ai-content-generator')?></option>
                <option value="evalu" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'evalu' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Evaluative','gpt3-ai-content-generator')?></option>
                <option value="expos" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'expos' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Expository','gpt3-ai-content-generator')?></option>
                <option value="ficti" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'ficti' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Fiction','gpt3-ai-content-generator')?></option>
                <option value="histo" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'histo' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Historical','gpt3-ai-content-generator')?></option>
                <option value="journ" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'journ' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Journalistic','gpt3-ai-content-generator')?></option>
                <option value="metaph" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'metaph' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Metaphorical','gpt3-ai-content-generator')?></option>
                <option value="monol" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'monol' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Monologue','gpt3-ai-content-generator')?></option>
                <option value="lette" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'lette' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Letter','gpt3-ai-content-generator')?></option>
                <option value="lyric" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'lyric' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Lyrical','gpt3-ai-content-generator')?></option>
                <option value="narra" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'narra' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Narrative','gpt3-ai-content-generator')?></option>
                <option value="news" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'news' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('News','gpt3-ai-content-generator')?></option>
                <option value="objec" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'objec' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Objective','gpt3-ai-content-generator')?></option>
                <option value="pasto" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'pasto' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Pastoral','gpt3-ai-content-generator')?></option>
                <option value="perso" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'perso' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Personal','gpt3-ai-content-generator')?></option>
                <option value="persu" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'persu' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Persuasive','gpt3-ai-content-generator')?></option>
                <option value="poeti" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'poeti' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Poetic','gpt3-ai-content-generator')?></option>
                <option value="refle" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'refle' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Reflective','gpt3-ai-content-generator')?></option>
                <option value="rheto" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'rheto' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Rhetorical','gpt3-ai-content-generator')?></option>
                <option value="satir" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'satir' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Satirical','gpt3-ai-content-generator')?></option>
                <option value="senso" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'senso' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Sensory','gpt3-ai-content-generator')?></option>
                <option value="simpl" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'simpl' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Simple','gpt3-ai-content-generator')?></option>
                <option value="techn" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'techn' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Technical','gpt3-ai-content-generator')?></option>
                <option value="theore" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'theore' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Theoretical','gpt3-ai-content-generator')?></option>
                <option value="vivid" <?php
                echo  ( esc_html( $_wporg_writing_style ) == 'vivid' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Vivid','gpt3-ai-content-generator')?></option>
                <option value="busin" <?php echo (esc_html($_wporg_writing_style) == 'busin') ? 'selected' : ''; ?>><?php echo esc_html__('Business','gpt3-ai-content-generator')?></option>
                <option value="repor" <?php echo (esc_html($_wporg_writing_style) == 'repor') ? 'selected' : ''; ?>><?php echo esc_html__('Report','gpt3-ai-content-generator')?></option>
                <option value="resea" <?php echo (esc_html($_wporg_writing_style) == 'resea') ? 'selected' : ''; ?>><?php echo esc_html__('Research','gpt3-ai-content-generator')?></option>
            </select>
        </div>
        <div class="wpaicg-mb-10 wpaicg-help-field">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Tone','gpt3-ai-content-generator')?></strong></label><br/>
            <select name="autogpt[tone]">
                <option value="formal" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'formal' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Formal','gpt3-ai-content-generator')?></option>
                <option value="asser" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'asser' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Assertive','gpt3-ai-content-generator')?></option>
                <option value="authoritative" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'authoritative' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Authoritative','gpt3-ai-content-generator')?></option>
                <option value="cheer" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'cheer' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Cheerful','gpt3-ai-content-generator')?></option>
                <option value="confident" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'confident' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Confident','gpt3-ai-content-generator')?></option>
                <option value="conve" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'conve' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Conversational','gpt3-ai-content-generator')?></option>
                <option value="factual" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'factual' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Factual','gpt3-ai-content-generator')?></option>
                <option value="friendly" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'friendly' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Friendly','gpt3-ai-content-generator')?></option>
                <option value="humor" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'humor' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Humorous','gpt3-ai-content-generator')?></option>
                <option value="informal" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'informal' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Informal','gpt3-ai-content-generator')?></option>
                <option value="inspi" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'inspi' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Inspirational','gpt3-ai-content-generator')?></option>
                <option value="neutr" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'neutr' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Neutral','gpt3-ai-content-generator')?></option>
                <option value="nostalgic" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'nostalgic' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Nostalgic','gpt3-ai-content-generator')?></option>
                <option value="polite" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'polite' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Polite','gpt3-ai-content-generator')?></option>
                <option value="profe" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'profe' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Professional','gpt3-ai-content-generator')?></option>
                <option value="romantic" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'romantic' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Romantic','gpt3-ai-content-generator')?></option>
                <option value="sarca" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'sarca' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Sarcastic','gpt3-ai-content-generator')?></option>
                <option value="scien" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'scien' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Scientific','gpt3-ai-content-generator')?></option>
                <option value="sensit" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'sensit' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Sensitive','gpt3-ai-content-generator')?></option>
                <option value="serious" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'serious' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Serious','gpt3-ai-content-generator')?></option>
                <option value="sincere" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'sincere' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Sincere','gpt3-ai-content-generator')?></option>
                <option value="skept" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'skept' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Skeptical','gpt3-ai-content-generator')?></option>
                <option value="suspenseful" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'suspenseful' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Suspenseful','gpt3-ai-content-generator')?></option>
                <option value="sympathetic" <?php
                echo  ( esc_html( $_wporg_writing_tone ) == 'sympathetic' ? 'selected' : '' ) ;
                ?>><?php echo esc_html__('Sympathetic','gpt3-ai-content-generator')?></option>
                <option value="curio" <?php echo (esc_html($_wporg_writing_tone) == 'curio') ? 'selected' : ''; ?>><?php echo esc_html__('Curious','gpt3-ai-content-generator')?></option>
                <option value="disap" <?php echo (esc_html($_wporg_writing_tone) == 'disap') ? 'selected' : ''; ?>><?php echo esc_html__('Disappointed','gpt3-ai-content-generator')?></option>
                <option value="encou" <?php echo (esc_html($_wporg_writing_tone) == 'encou') ? 'selected' : ''; ?>><?php echo esc_html__('Encouraging','gpt3-ai-content-generator')?></option>
                <option value="optim" <?php echo (esc_html($_wporg_writing_tone) == 'optim') ? 'selected' : ''; ?>><?php echo esc_html__('Optimistic','gpt3-ai-content-generator')?></option>
                <option value="surpr" <?php echo (esc_html($_wporg_writing_tone) == 'surpr') ? 'selected' : ''; ?>><?php echo esc_html__('Surprised','gpt3-ai-content-generator')?></option>
                <option value="worry" <?php echo (esc_html($_wporg_writing_tone) == 'worry') ? 'selected' : ''; ?>><?php echo esc_html__('Worried','gpt3-ai-content-generator')?></option>
            </select>
        </div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-autogpt-openai"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-autogpt-heading"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-autogpt-heading" style="display: none">
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('How Many Headings?','gpt3-ai-content-generator')?></strong></label><br>
            <select id="wpai_number_of_heading" name="autogpt[heading]">
                <?php
                for ( $i = 1 ;  $i < 16 ;  $i++ ) {
                    echo  '<option' . (( $i == 3 ? ' selected' : '' )) . ' value="' . $i . '">' . $i . '</option>' ;
                }
                ?>
            </select>
        </div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-autogpt-language"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-autogpt-setting"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-autogpt-setting" style="display: none">
        <table class="wpaicg-mb-10">
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Restart Failed Jobs After','gpt3-ai-content-generator')?></div></td>
                <td>
                    <div class="wpaicg-mb-10">
                        <select name="autogpt[restart]">
                            <option value=""><?php echo esc_html__('Do not Restart','gpt3-ai-content-generator')?></option>
                            <?php
                            for($i = 20; $i <=60; $i+=10){
                                echo '<option'.($i == 20 ? ' selected':'').' value="'.esc_html($i).'">'.esc_html($i).'</option>';
                            }
                            ?>
                        </select>
                        <?php echo esc_html__('minutes','gpt3-ai-content-generator')?>
                        <a href="https://docs.aipower.org/docs/AutoGPT/auto-content-writer/bulk-editor#auto-restart-failed-jobs" target="_blank">?</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Attempt up to a maximum of','gpt3-ai-content-generator')?></div></td>
                <td>
                    <div class="wpaicg-mb-10">
                        <select name="autogpt[try]">
                            <?php
                            for($i = 1; $i <=10; $i++){
                                echo '<option value="'.esc_html($i).'">'.esc_html($i).'</option>';
                            }
                            ?>
                        </select>
                        <?php echo esc_html__('times','gpt3-ai-content-generator')?>
                        <a href="https://docs.aipower.org/docs/AutoGPT/auto-content-writer/bulk-editor#auto-restart-failed-jobs" target="_blank">?</a>
                    </div>
                </td>
            </tr>
        </table>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-autogpt-heading"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-autogpt"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-autogpt-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready for auto posting!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('One last step is to setup your cron job!','gpt3-ai-content-generator')?></p>
        <p><a href="<?php echo admin_url('admin.php?page=wpaicg_bulk_content')?>"><?php echo esc_html__('Go to AutoGPT Dashboard to get your cronjob commands','gpt3-ai-content-generator')?></a></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/AutoGPT" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
