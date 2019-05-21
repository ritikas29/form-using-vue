<template>
<div class="container-fluid">
                          <h2>PART A</h2>
                      <h3>VENDOR ASSESSMENT INFORMATION COLLECTION</h3>
                      <h2>Vendor Assessment Category- 1.OEM 2.Reseller</h2>
                  <form>
                    
                      <div class="border1">
                              <!--input1-->
                              <fieldset class="input1">
                                                  <div class="p-1 mb-2 bg-info text-white">
                                                                  <legend>  
                                                                          <!--a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample" -->
                                                                          
                                                                          AUTHENTICATION OF VENDOR PROFILE
                                                                          
                                                                          <i class="fa fa-angle-down"></i>
                                                                          
                                                                  </legend>
                                                  </div>
                                                  <!--div class="collapse" id="collapseExample"-->
                              <div class="form-group">
                                  <label for="inputEmail" class="col-sm-4 col-form-label">Name of Company/ Firm:</label>
                                  <input type="text"  class="col-sm-4 col-form-control" v-model="inputEmail"  placeholder="Name of Company/ Firm">
                              </div>
                              <div class="form-group">
                                  <label for="inputEmail" class="col-sm-4 col-form-label">Constitution of Firm:</label>
                                  <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="Constitution of Firm">
                              </div>
                              <div class="form-group">
                                      <label for="inputEmail" class="col-sm-4 col-form-label">Company Identification Number: </label>
                                      <input type="text" class="col-sm-4 col-form-control" v-model="inputEmail" placeholder="Company Identification Number">
                              </div>
                              <div class="form-group">
                                      <label for="inputEmail"  class="col-sm-4 col-form-label">Udyog Aadhar No. (if not): </label>
                                      <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="Udyog Aadhar No. (if not)">
                                </div>
                              <div class="form-group">
                                          <label for="inputEmail" class="col-sm-4 col-form-label"> Aadhar No.(Proprietor): </label>
                                          <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder=" Aadhar No.(Proprietor)">
                                </div>
                              <div class="form-group">
                                              <label for="inputEmail" class="col-sm-4 col-form-label"> GSTIN:</label>
                                              <input type="email" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder=" GSTIN">
                                </div>
                              <div class="form-group">
                                          <label for="inputEmail" class="col-sm-4 col-form-label"> PAN:</label>
                                                  <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="PAN">
                                 </div>
                              <div class="form-group">
                                          <label for="inputEmail" class="col-sm-4 col-form-label">Date of Incorporation: </label>
                                        <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="Date of Incorporation">
                            </div>
                              <div class="form-group">
                                      <label for="inputEmail" class="col-sm-4 col-form-label"> Primary E Mail ID: </label>
                                    <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="Primary E Mail ID ">
                              </div>
                              <div class="form-group">
                                      <label for="inputEmail" class="col-sm-4 col-form-label">Primary Contact Number: </label>
                                    <input type="text" v-model="inputEmail" class="col-sm-4 col-form-control" placeholder="Primary Contact Number ">
                              </div>
                          </fieldset>

                          <!--input 2-->
                              <fieldset class="input2">
                                       <div class="p-1 mb-2 bg-info text-white"> 
                                                <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="CollapseExample3">  
                                                                 <b-button v-b-toggle.collapse-2 class="m-1">ADRESSS</b-button>
                                                                  <i class="fa fa-angle-down"></i>  
                                                          </a>   
                                                  </legend>
                                       </div>
                                           <b-collapse id="collapse-2">
                                               <div class="form-group" >
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Type of Address: </label>
                                                        <input type="text" class="form-control" v-model="inputEmail" placeholder="Type of Address">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Flat/Door/Block No.:</label> 
                                                        <input type="text"  class="form-control" v-model="inputEmail" placeholder="Flat/Door/Block No.">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Road/Street/Post Office: </label>
                                                                <input type="text" class="form-control" v-model="inputEmail" placeholder="Road/Street/Post Office">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Area/ Locality: </label>
                                                        <input type="text" class="form-control" v-model="inputEmail" placeholder="Area/ Locality">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Town/City/District:</label>
                                                        <input type="text"   v-model="inputEmail" placeholder="Town/City/District">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Country:</label>
                                                        <input type="text"  v-model="inputEmail" placeholder="Country">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">State:</label>
                                                        <input type="text"  v-model="inputEmail" placeholder="State">
                                                </div>
                                                <div class="form-group">
                                                        <label for="inputEmail" class="col-sm-3 col-form-label">Pincode:</label>
                                                        <input type="text"  v-model="inputEmail" placeholder="Pincode">
                                                </div>
                                                <small id="emailHelp" class="form-text text-muted">Evidence - Copy of any bill/any other address proof  </small>
                                                        <input type="file" id="files"  ref="files" />
                                                                <button class="btn btn-secondary" v-on:click=upload()>UPLOAD</button>  <br>  <br>
                                           </b-collapse>
                              </fieldset>
                              <!--input 3-->
                              <fieldset class= "input3">
                                    <div class="p-1 mb-2 bg-info text-white">  
                                                  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="CollapseExample3">  
                                                                   <b-button v-b-toggle.collapse-3 class="m-1"> DETAILS OF PRODUCTS OFFERED IN GeM</b-button>
                                                                  <i class="fa fa-angle-down"></i>  
                                                          </a>   
                                                  </legend>
                                      </div>
                                 <b-collapse id="collapse-3">
                                                        <div class="form-group">
                                                                <label for="inputEmail">Item Name and Description - Category: </label>
                                                                <input type="text"  class="form-control" v-model="inputEmail" placeholder="">

                                                                        <small id="emailHelp" class="form-text text-muted">List of catalogue/regular items:</small>
                                                                        <input type="file" id="files"  ref="files" />
                                                                                <button class="btn btn-secondary">UPLOAD</button>   
                                                                        <small id="emailHelp" class="form-text text-muted">List of made to order/customized items:</small>
                                                                        <input type="file" id="files"  ref="files" />
                                                                                <button class="btn btn-secondary">UPLOAD</button>   
                                                        </div>

                                                <div class="form-group">
                                                  <label for="inputEmail">Annual Manufacturing Capacity (which can be offered in GeM) - Unit shall match with units used in GeM Catalogue:</label> 
                                                  <input type="text"  class="form-control" v-model="inputEmail" placeholder="">
                                                </div>
                                                <div class="form-group">
                                                  <small id="emailHelp" class="form-text text-muted">Quality Certification </small>
                                                  <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                </div>
                                                <div class="form-group">
                                                  <label for="inputEmail">BIS / other License Number (if applicable) with validity date :</label>
                                                  <input type="text" class="form-control" v-model="inputEmail" placeholder="">
                                                  <small id="emailHelp" class="form-text text-muted">Document Required-Memorandum and Article of Association of the Company</small>
                                                  <input type="file" id="files"  ref="files" />
                                                  <button class="btn btn-secondary">UPLOAD</button>   

                                                  </div>
                                                <div class="form-group">
                                                  <label for="inputEmail">Test report available with the firm: </label>
                                                  <input type="text" class="form-control" v-model="inputEmail" placeholder="">

                                                  <small id="emailHelp" class="form-text text-muted">Reports</small>
                                                  <input type="file" id="files"  ref="files" />
                                                  <button class="btn btn-secondary">UPLOAD</button>   

                                                  </div>
                                                  <div class="form-group">
                                                  <label for="inputEmail">OEM Authorization to sell products in open market (for resellers)</label><br>
                                                  <input type="text" class="form-control" v-model="inputEmail" placeholder="">  
                                                  <small id="emailHelp" class="form-text text-muted"> OEM Authorization letter</small>
                                                  <input type="file" id="files"  ref="files" />
                                                  <button class="btn btn-secondary">UPLOAD</button>
                                                  </div>
                                    
                                          <div class="form-group" >
                                                  <div class="p-1 mb-2 bg-info text-white">
                                                              <label for="inputEmail">
                                                                    <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample4" >   
                                                              <b-button v-b-toggle.collapse-4 class="m-1">
                                                            Total Quantity supplied to Government in Last three years (Value)</b-button>
                                                            <i class="fa fa-arrow-circle-down"></i> </a> </label><br>
                                                   </div>
                                             <b-collapse id="collapse-4">
                                                          
                                                              <td><br>Details of top three Government orders (value wise) in last 3 years </td><br>
                                                

                                                          <label for="inputEmail" class="col-sm-5 col-form-label">1. Department Name:</label>
                                                            <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Department Name"><br><br>
                                                              <label for="inputEmail" class="col-sm-5 col-form-label">Authorized Official Name:</label>
                                                              <input type="Name of Company/ Firm"  class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Authorized Official Name"><br><br>
                                                              <label for="inputEmail"  class="col-sm-5 col-form-label">Contact Number of the Authorized Official:</label>
                                                              <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Contact Number of the Authorized Official"> <br><br>
                                                              <label for="inputEmail" class="col-sm-5 col-form-label">E-mail ID of the Authorized Official:</label>
                                                              <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" id="inputEmail" placeholder="E-mail ID of the Authorized Official"> <br><br>
                                                              <label for="inputEmail" class="col-sm-5 col-form-label">Item supplied:</label>
                                                              <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Item supplied"> <br><br>
                                                              <label for="inputEmail" class="col-sm-5 col-form-label"> Quantiy supplied:</label>
                                                              <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Quantiy supplied"> <br><br>
                                                              <label for="inputEmail" class="col-sm-5 col-form-label">Order Value (in Rs.):</label>
                                                              <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Order Value"> <br><br>
                                                
                                                          <label for="inputEmail" class="col-sm-6 col-form-label">(Upload the work orders/ letter of order completion)</label>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button><br>

                                                          <button   class="btn btn-outline-info">Add More</button>
                                             </b-collapse>

                                      </div>
                                      <div class="form-group" >
                                        <div class="input5">
                                                  <div class="p-1 mb-2 bg-info text-light">
                                                              <label for="inputEmail">
                                                                
                                                                <a  class="p-1 mb-2 bg-info text-light" data-toggle="collapse" href="#collapseExample5" > 
                                                         <b-button v-b-toggle.collapse-5 class="m-1">
                                                        Total Value of the orders executed to Non Government concerns during the last three years</b-button>
                                                        <i class="fa fa-arrow-circle-down"></i> </a></label><br>
                                                  </div>
                                                  <b-collapse id="collapse-5">
                                                  
                                                          <td><br> Details of top three Government orders (value wise) in last 3 years </td><br>
                                                  
                                                
                                                <label for="inputEmail" class="col-sm-5 col-form-label">1. Department Name:</label>
                                                <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Department Name"><br><br>
                                                        <label for="inputEmail" class="col-sm-5 col-form-label">Authorized Official Name:</label>
                                                        <input type="Name of Company/ Firm"  class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Authorized Official Name"><br><br>
                                                        <label for="inputEmail" class="col-sm-5 col-form-label">Contact Number of the Authorized Official:</label>
                                                        <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Contact Number of the Authorized Official"> <br><br>
                                                        <label for="inputEmail" class="col-sm-5 col-form-label">E-mail ID of the Authorized Official:</label>
                                                        <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="E-mail ID of the Authorized Official"> <br><br>
                                                          <label for="inputEmail" class="col-sm-5 col-form-label">Item supplied:</label>
                                                          <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Item supplied"><br><br>
                                                          <label for="inputEmail" class="col-sm-5 col-form-label"> Quantiy supplied:</label>
                                                           <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Quantiy supplied"> <br><br>
                                                          <label for="inputEmail" class="col-sm-5 col-form-label">Order Value (in Rs.):</label>
                                                          <input type="Name of Company/ Firm" class="col-sm-5 col-form-control" v-model="inputEmail" placeholder="Order Value"> <br><br>
                                                    <label for="inputEmail" class="col-sm-6 col-form-label">(Upload the work orders/ letter of order completion)</label>
                                                    <input type="file" id="files"  ref="files" />
                                                    <button class="btn btn-secondary"> UPLOAD</button> <br>

                                                    <button   class="btn btn-outline-info" >Add More</button>   
                                                  </b-collapse>
                                        </div>
                                  </div>
                                      <div class="form-group">
                                                  <label for="inputEmail">Whether the company has been Debbared/Blacklist by any govt organisation? </label>
                                                          <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">
                                                          <small id="emailHelp" class="form-text text-muted">Undertaking on company letter head</small>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                          </div>
                                          <div class="form-group">
                                                          <label for="inputEmail">What is the annual turnover of the company along with profit/loss statement of last three years? </label>
                                                                  <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">
                                                                  <small id="emailHelp" class="form-text text-muted">Upload financial statement</small>
                                                                  <input type="file" id="files"  ref="files" />
                                                                  <button class="btn btn-secondary">UPLOAD</button> <br>  
                                                  </div>
                                 </b-collapse>
                                  </fieldset>
                                  <!--input 6-->
                            <h2>PART B</h2>
                            <div class="in">
                            <fieldset class= "input6">
                                  <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                        <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample6" >  
                                                           <b-button v-b-toggle.collapse-6 class="m-1">PROCESS CAPABILITY </b-button>     
                                                                <i class="fa fa-angle-down"></i>  
                                                                </a>   
                                                </legend>
                                    </div>
                                        <b-collapse id="collapse-6"> 
                                          <div class="form-group" >
                                                  <label for="inputEmail" >Is process flow diagram available with firm? </label><br>  
                                                  <input type="checkbox" v-model="checkbox"> YES<br>
                                                  <input type="checkbox" v-model="checkbox">NO<br>
                                                  <input type="file" id="files"  ref="files" />
                                                  <button class="btn btn-secondary">UPLOAD</button>   
                                          
                                          </div>
                                          <div class="form-group" >
                                                          <label for="inputEmail">Is specific process flow diagram available of the products that are being manufactured by the firm? </label><br>
                                                          <input type="checkbox" v-model="checkbox" > YES<br>
                                                          <input type="checkbox" v-model="checkbox"> NO<br>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                  
                                           </div> 
                                        </b-collapse>
                            </fieldset>   
                         <fieldset class= "input7">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample7" >  
                                                                    <b-button v-b-toggle.collapse-7 class="m-1">PRODUCTION CAPACITY  </b-button>     
                                                                  <i class="fa fa-angle-down"></i>  
                                                                  </a>   
                                                  </legend>
                                          </div>
                                    
                                         <b-collapse id="collapse-7">
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Which machines are critical for firm's production? </label><br>
                                                    <input type="text" class="form-control" v-model="inputEmail" placeholder="">
                                            
                                            </div>
                                            <div class="form-group" >
                                                            <label for="inputEmail" >What is  firm's daily & monthly manufacturing capacity? </label><br>
                                                            <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">
                                                            <input type="file" id="files"  ref="files" />
                                                            <button class="btn btn-secondary">UPLOAD</button>  
                                                            <small id="emailHelp" class="form-text text-muted"> Document</small> 
                                                    
                                            </div>
                                            <div class="form-group" >
                                                          <label for="inputEmail" >What is the utilisation of the capacity against the manufacturing capacity? </label><br>
                                                          <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                  
                                          </div>
                                          <div class="form-group" >
                                                          <label for="inputEmail">Does the firm manufacture and sell its product to another manufacturer or assembeler? </label><br>
                                                          <input type="checkbox" v-model="checkbox"> YES<br>
                                                          <input type="checkbox" v-model="checkbox"> NO<br>         
                                          </div>
                                          <div class="form-group" >
                                                          <label for="inputEmail">Is firm's product customised for each customer according to specification given by customer who would use it in his own product? </label><br>
                                                          <input type="checkbox" v-model="checkbox"> YES<br>
                                                          <input type="checkbox" v-model="checkbox"> NO<br>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>  
                                                          <small id="emailHelp" class="form-text text-muted"> Upload the Evidence</small>
                                          </div>    
                                                  
                                         </b-collapse>

                                  </fieldset>
                                  <fieldset class= "input8">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample8" >  
                                                                          <b-button v-b-toggle.collapse-8 class="m-1"> QUALITY</b-button>
                                                                  <i class="fa fa-angle-down"></i>  
                                                                  </a>   
                                                  </legend>
                                      </div>
                                           <b-collapse id="collapse-8">   
                                            <div class="form-group" >
                                                    <label for="inputEmail">Does the firm have Quality assurance process for the product? Does the firm have part wise inspection plan?</label><br>
                                                    <input type="checkbox"> YES<br>
                                                    <input type="checkbox"> NO<br>
                                                    <input type="file" id="files"  ref="files" />
                                                    <button class="btn btn-secondary">UPLOAD</button>   
                                            </div>
                                           </b-collapse>
                              </fieldset>
                              <fieldset class= "input9">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample9" >  
                                                                 <b-button v-b-toggle.collapse-9 class="m-1"> TRANSPORTATION </b-button>     
                                                                  <i class="fa fa-angle-down"></i>  
                                                                  </a>   
                                                  </legend>
                                      </div>
                                    <b-collapse id="collapse-9">   
                                                  <div class="form-group" >    
                                                                  <label for="inputEmail">What is firm's territory of operation?</label><br>
                                                                  <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">

                                                          </div>      
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Does the firm have SOP for transportation to deliever defect free products?</label><br>
                                                    <input type="checkbox" v-model="checkbox" > YES<br>
                                                    <input type="checkbox" v-model="checkbox"> NO<br>
                                                    <input type="file" id="files"  ref="files" />
                                                    <button class="btn btn-secondary">UPLOAD</button>   
                                            </div>
                                    </b-collapse>
                              </fieldset>
                              <fieldset class= "input10">
                                          <div class="p-1 mb-2 bg-info text-white">  
                                                  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample10" >  
                                                                   <b-button v-b-toggle.collapse-10 class="m-1"> SUPPLIERS   </b-button>    
                                                                  <i class="fa fa-angle-down"></i>  
                                                          </a>   
                                                  </legend>
                                            </div>
                                                <b-collapse id="collapse-10">     
                                                    <div class="form-group" >
                                                            <label for="inputEmail" >Is a list of the approved suppliers maintained along with quantity suppiled?</label><br>
                                                            <input type="checkbox" v-model="checkbox" > YES<br>
                                                            <input type="checkbox" v-model="checkbox"> NO<br>
                                                            <input type="file" id="files"  ref="files" />
                                                            <button class="btn btn-secondary">UPLOAD</button>   
                                                    </div>
                                                    <div class="form-group" >
                                                                  <label for="inputEmail" >Does the firm monitor their performance?</label><br>
                                                                  <input type="checkbox"  v-model="checkbox"> YES<br>
                                                                  <input type="checkbox" v-model="checkbox"> NO<br>
                                                                  <input type="file" id="files"  ref="files" />
                                                                  <button class="btn btn-secondary">UPLOAD</button>   
                                                          </div>
                                                </b-collapse>
                              </fieldset>
                              <fieldset class= "input11">
                                                    <div class="p-1 mb-2 bg-info text-white"> 
                                                            <legend>
                                                                    <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample11" >  
                                                                           <b-button v-b-toggle.collapse-11 class="m-1">   REJECTED MATERIAL  </b-button>     
                                                                            <i class="fa fa-angle-down"></i>  
                                                                            </a>   
                                                            </legend>
                                                    </div>
                                                  <b-collapse id="collapse-11">          
                                                        <div class="form-group" >
                                                            <label for="inputEmail">How is the rejected material handled?</label><br>
                                                            <input type="file" id="files"  ref="files" />
                                                            <button class="btn btn-secondary">UPLOAD</button>   
                                                          </div>
                                                  </b-collapse>
                              </fieldset>
                              <fieldset class= "input12">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample12" >  
                                                                  <b-button v-b-toggle.collapse-12 class="m-1"> COMPLAINTS   </b-button>    
                                                                  <i class="fa fa-angle-down"></i>  
                                                                  </a>   
                                                  </legend>
                                      </div>
                                          <b-collapse id="collapse-12"> 
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Does the firm have a process to deal with customer complaints?</label><br>
                                                    <input type="checkbox" v-model="checkbox" > YES<br>
                                                          <input type="checkbox"   v-model="checkbox"> NO<br>
                                                          <input type="file" id="files"  ref="files" />
                                                        
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                  
                                            </div>
                                            <div class="form-group">
                                                          <label for="inputEmail">What is the time taken for resolution of complaints?</label><br>
                                                          <input type="Name of Company/ Firm" class="form-control" v-model="inputEmail" placeholder="">
                                                  </div>
                                          </b-collapse> 
                              </fieldset>
                              <fieldset class= "input13">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample13" >  
                                                                         <b-button v-b-toggle.collapse-13 class="m-1">  SAFETY</b-button>
                                                                  <i class="fa fa-angle-down"></i>  
                                                            </a>   
                                                  </legend>
                                      </div>
                                            <b-collapse id="collapse-13"> 
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Is there a safety standard and operating procedures manual?</label><br>
                                                    <input type="checkbox" v-model="checkbox"> YES<br>
                                                          <input type="checkbox" v-model="checkbox"> NO<br>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                  
                                            </div>
                                            </b-collapse>      
                                          
                              </fieldset>
                              <fieldset class= "input14">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample14" >  
                                                                 <b-button v-b-toggle.collapse-14 class="m-1">  WARRANTY          
                                                                  <i class="fa fa-angle-down"></i>  </b-button>
                                                                  </a>   

                                                  </legend>
                                      </div>
                                    <b-collapse id="collapse-14">         
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Does the firm provide warranty/ guarantee or recalling to the product?</label><br>
                                                    <input type="checkbox" v-model="checkbox" > YES<br>
                                                          <input type="checkbox" v-model="checkbox" > NO<br>
                                                          <input type="file" id="files"  ref="files" />
                                                          <button class="btn btn-secondary">UPLOAD</button>   
                                                        
                                                          
                                                  
                                            </div>
                                            <div class="form-group" >
                                                          <label for="inputEmail" >Is there an obligation for raw material, product development design, product quality, product life time and product sustainability in the warranty provided by the firm?</label><br>
                                                          <input type="checkbox" v-model="checkbox" > YES<br>
                                                                <input type="checkbox" v-model="checkbox"> NO<br>
                                                                <input type="file" id="files"  ref="files" />
                                                                <button class="btn btn-secondary">UPLOAD</button>   
                                                        
                                                  </div>
                                    </b-collapse>    
                              </fieldset>
                              <fieldset class= "input15">
                                          <div class="p-1 mb-2 bg-info text-white">  <legend>
                                                          <a  class="p-1 mb-2 bg-info text-white" data-toggle="collapse" href="#collapseExample15" >  
                                                                   <b-button v-b-toggle.collapse-15 class="m-1">RESEARCH & DEVELOPMENT    </b-button>    
                                                                
                                                                  <i class="fa fa-angle-down"></i>  
                                                                  </a>   
                                                  </legend>
                                      </div>
                                           <b-collapse id="collapse-15">    
                                            <div class="form-group" >
                                                    <label for="inputEmail" >Is there an in house/parent company R&D centre?</label><br>
                                                    <input type="checkbox" v-model="checkbox" > YES<br>
                                                          <input type="checkbox" v-model="checkbox"> NO<br>
                                                          
                                                  
                                            </div>
                                            <div class="form-group" >
                                                          <label for="inputEmail" >Is the R&D centre recognised or approved centre?</label><br>
                                                          <input type="checkbox" > YES<br>
                                                                <input type="checkbox"> NO<br>
                                                                <input type="file" id="files"  ref="files" />
                                                              
                                                                <button class="btn btn-secondary">UPLOAD</button>   
                                                        
                                                  </div>
                                                  <div class="form-group" >
                                                                  <label for="inputEmail" >Is there collaberation with premium R&D institutes for product development/new product/quality improvement?</label><br>
                                                                  <input type="checkbox" > YES<br>
                                                                        <input type="checkbox"> NO<br>
                                                                        <input type="file" id="files"  ref="files" />
                                                                        <button class="btn btn-secondary">UPLOAD</button>   
                                                                
                                                          </div>
                                                          <div class="form-group" >
                                                                          <label for="inputEmail" >Are there any patents published/filed for new products/quality improvement?</label><br>
                                                                          <input type="checkbox" > YES<br>
                                                                                <input type="checkbox"> NO<br>
                                                                                <input type="file" id="files"  ref="files" />
                                                                                <button class="btn btn-secondary">UPLOAD</button>   
                                                                        
                                                                  </div>
                                                                  <div class="form-group" >
                                                                                  <label for="inputEmail" >Has any prototype been developed?</label><br>
                                                                                  <input type="checkbox" > YES<br>
                                                                                        <input type="checkbox"> NO<br>
                                                                                        <input type="file" id="files"  ref="files" />
                                                                                        <button class="btn btn-secondary">UPLOAD</button>   
                                                                                
                                                                          </div>
                                           </b-collapse>   
                              </fieldset>
                              
                              </div>
                              <div class="pagination justify-content-center">
                              <button type="submit" class="btn btn-primary active">Submit</button>
                              <button type="submit" class="btn btn-dark " >
                                          <i class="fa fa-repeat"></i> Reset</button>
                  
                              </div>
                    </div>
                  
         </form>
</div>

</template>
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
 <script>
  

    export default {
        data() {
          return {
              inputEmail:" ",
              checkbox:""
          }
        }
    }
    
    
    
 </script>
 <style > 
 h3 {
    padding-top: 30px;
    text-align: center;
     
      font-family: 'Roboto', sans-serif; 
      font-size: 25pt;         
      font-style: normal; 
      font-weight: bold; 
      color:rgb(11, 4, 58);
      text-align: center; 
      text-decoration: underline
    }
  h2 {
    text-align: center;
    color:rgb(85, 22, 8);
    font-family: 'Roboto Mono'; 

  }
  .container-fluid {
  border-style:hidden;
  padding-left: 100%;
  padding-right: 100%;
  padding-bottom: 30px;
}  
.border1 {
      
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px; 
}
.input1 {
  font-weight: bold;
  text-align:justify;
  
}
.input2{
  font-weight: bold;
  text-align:justify;
}
.input3 {
 
  font-weight: bold;
  text-align: justify;
    
}
.bg-info {
  background-color: #1b363a;
  
}
.in {
  font-weight: bold;
  text-align:justify;
  
}
.btn-secondary {
  background-color: #df6045 ;
  font-weight: bold;
}

 
 </style>
