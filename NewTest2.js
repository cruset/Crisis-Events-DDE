import { Selector } from 'testcafe';
import { loadHelpers, viewReady, routeTo } from './HelpersView';
//Legal Involvment DDE in Crisis Events 
// COMPLETE

fixture `testarcher`
    .page `http://soldev-vm15.archerlab.local/rsaarcher/default.aspx`

    .beforeEach(async t => {
         await t
            .maximizeWindow()
            .typeText(Selector('#txtUserName'), 'sysadmin')
            .pressKey('tab')
            .typeText(Selector('#txtInstance'), 'Taylor')
            .pressKey('tab')
            .typeText(Selector('#txtpassword'), 'Archer123!')
            .click(Selector('#btnLogin'));

        await t

            .click(Selector('span').withText('Business Resiliency').find('.x-btn-arrow-glyph'))
            .click(Selector('span').withText('Log a Crisis Event'))
            .switchToIframe(Selector('iframe[id^=record][id$=iframeEl]'))
            .click(Selector('.rtsIn').nth(3).find('span').withText('Crisis Monitoring'))
    });

//When clicking Yes for Legal Involvment
test('test1', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_0')
   
        //await loadHelpers();
        //await viewReady();
        //await t.debug();
        await t
            .click(yes);
        
        //.expect(routeTo('newrecord/eyJhcHBsaWNhdGlvbklkIjozODl9')).ok();
        await t

                //.click(Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl').find('.toggle'))
                //.click(Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl_dropdown').find('.item.dropdown_1.selectable'))
                
                .expect(Selector('span').withText('Reported to Police:').getAttribute('class')).notEql('hidden')
                .expect(Selector('span').withText('Police Officer Name:').getAttribute('class')).notEql('hidden')
                .expect(Selector('span').withText('Legal Involvement Details:').getAttribute('class')).notEql('hidden')
                .expect(Selector('span').withText('Police Case Number:').getAttribute('class')).notEql('hidden')
                .expect(Selector('span').withText('Police Department:').getAttribute('class')).notEql('hidden');
               
               // .click(Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl_dropdown').find('.item.dropdown_1.selectable'))
       
        //.click(dropDown).withText('Reported to Police:').getAttribute('phui_combobox_ajax')
        //.click(Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl').find('.toggle'))
        //.click(Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl_dropdown').find('.item.dropdown_1.selectable'))



    });

//When clicking No for Legal Involvment
test('test2', async t => {
    const no = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_1') 
    
   
        //await loadHelpers();
        //await viewReady();
        //await t.debug();
        await t
            .click(no);
    
        await t
                .expect(Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_1').withAttribute('class', /hvl-radiobutton/).exists).ok();

               
    });

//When clicking Unknown for Legal Involvment
test('test3', async t => {
    const unknown = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_2') 
    
   
        //await loadHelpers();
        //await viewReady();
        //await t.debug();
        await t
            .click(unknown);
    
        await t
                .expect(Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_2').withAttribute('class', /hvl-radiobutton/).exists).ok();

               
    });


//Clicking Yes & "Yes" in dropdown 'Reported to Police'
test('test4', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_0')
    const dropDown = Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl')

    await t
        .click(yes);
        await t

        .click(dropDown)
        .click(Selector('span').withText('Yes'))
        .expect(Selector('span').withAttribute('class', /item dropdown_1 selectable/).exists).ok();
        //\s+selected
});

//Clicking Yes & "No Selection" in dropdown 'Reported to Police'
test('test5', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_0')
    
    const dropDown = Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl')

    await t
        .click(yes);
        await t

        .click(dropDown)
        .click(Selector('span').withText('No Selection'))
        .expect(Selector('span').withAttribute('class', /item dropdown_0 selectable/).exists).ok();
});

//Clicking Yes & "No" in dropdown 'Reported to Police' 
test('test6', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_0')
    
    const dropDown = Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl')

    await t
        .click(yes);

        await t
            .click(dropDown)
            .click(Selector('ul').withText('No'))
            //.click(Selector('span').withText('No'))
            //await t.debug()
            

            .expect(Selector('span').withAttribute('class',/item dropdown_2 selectable/).exists).ok();
           // .expect(Selector('span').withText('No').notEql('hidden'); 
            
});


//Clicking Yes & "Unknown" in dropdown 'Reported to Police' 
test('test7', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2625_f13528c_0')
    
    const dropDown = Selector('#master_DefaultContent_rts_ts2622_s2625_f13529c_ddl')

    await t
        .click(yes);

        await t
            .click(dropDown)
            .click(Selector('span').withText('Unknown'))

            .expect(Selector('span').withAttribute('class', /item dropdown_3 selectable/).exists).ok();
});
