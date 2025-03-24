var documenterSearchIndex = {"docs":
[{"location":"intro.html#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"ACGui provides a simple web interface for the ACFlow package, which is a state-of-the-art analytic continuation toolkit in Julia. ACGui is written in Julia as well. It is based on the Dash web framework.","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"Now ACGui supports the following features:","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"Six analytic continuation solvers: MaxEnt, BarRat, StochAC, StochSK, StochOM, and StochPX.\nVisualize the spectral functions on line.\nGenerate ac.toml automatically.\nFlexible UI.\nEasy to install.","category":"page"},{"location":"intro.html","page":"Introduction","title":"Introduction","text":"info: Info\nFor more information about the ACFlow package, please visit the following URLhttps://github.com/huangli712/ACFlowThe online documentation about the ACFlow package can be found in:https://huangli712.github.io/projects/acflow/index.html","category":"page"},{"location":"usage.html#Usage","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"It is quite easy to use ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#Launch-ACGui","page":"Usage","title":"Launch ACGui","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Suppose that the ACGui is placed in the folder /home/your_home/acgui, then we should execute the following command in the terminal to launch the server side of ACGui:","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"$ pwd\n/home/your_home/acgui\n$ ./util/acg.jl\n[ Info: Listening on: 127.0.0.1:8848, thread id: 1","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Next, we can use any favourite web browsers (such as Chrome, Edge, or Firefox) to open the following URL:","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"http://127.0.0.1:8848","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"This is the client side of ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#Prepare-input-data","page":"Usage","title":"Prepare input data","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Select the Data tab.\nClick Drag and Drop or Select Files.\nChoose a appropriate file that contains the necessary data.\nClick Open in the pop-up dialogue box.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"After a few seconds, the data will be uploaded to the server side. Note that the data file will be stored in the working directory in the server side.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"(Image: data.png)","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Figure 1 | The Data tab in ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#General-setup","page":"Usage","title":"General setup","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Select the General tab.\nFix filename for input data by finput.\nChoose suitable analytic continuation solver by solver.\nFix other parameters if necessary.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"(Image: general.png)","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Figure 2 | The General tab in ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#Analytic-continuation-solver","page":"Usage","title":"Analytic continuation solver","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Select the Solver tab.\nCustomize the parameters for the chosen solver.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"(Image: solver.png)","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Figure 3 | The Solver tab in ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"","category":"page"},{"location":"usage.html#Run","page":"Usage","title":"Run","text":"","category":"section"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Select the Run tab.\nClick Start Analytic Continuation to start calculation. After a few seconds or minites or hours (it depends on the solver you used), the spectrum will be shown in the bottom of this tab.\nClick Get ac.toml only to download the generated ac.toml file. Later you can modify it and start analytic continuation calculation manually.\nClick Check err.out to check the err.out file if available. If ACFlow encounters something wrong, it will write the error message into err.out.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"(Image: run.png)","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"Figure 4 | The Run tab in ACGui.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"info: Info\nThe MaxEnt and BarRat solvers are highly efficient. So we can see the analytic continuation results very soon. However, the other stochastic solvers are quite slow. It is not a good idea to launch them directly through ACGui. We usually use ACGui to generate a valid ac.toml. Then we can submit the computational job manually.","category":"page"},{"location":"usage.html","page":"Usage","title":"Usage","text":"warning: Warning\nNow ACGui does not support parallel calculation. In other words, you can not execute the StochAC, StochSK, StochOM, and StochPX solvers with multiple processors at the same time.","category":"page"},{"location":"library.html#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"library.html#Contents","page":"Library","title":"Contents","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"Pages = [\"library.md\"]\nDepth = 2","category":"page"},{"location":"library.html#Index","page":"Library","title":"Index","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"Pages = [\"library.md\"]","category":"page"},{"location":"library.html#Modules","page":"Library","title":"Modules","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"ACGui","category":"page"},{"location":"library.html#ACGui","page":"Library","title":"ACGui","text":"ACGui\n\nACGui is a simple web app for the ACFlow package. It depends on the Dash web framework, and provide an useful ui to facilite analytic continuation calculations. Now ACGui supports six analytic continuation solvers:\n\nMaximum Entropy Method (MaxEnt solver, recommended)\nBarycentric Rational Function Method (BarRat solver, recommended)\nStochastic Analytic Continuation (StochAC solver, Beach's algorithm)\nStochastic Analytic Continuation (StochSK solver, Sandvik's algorithm)\nStochastic Optimization Method (StochOM solver)\nStochastic Pole eXpansion (StochPX solver, recommended)\n\nThe MaxEnt and BarRat solvers are extremely fast, so users can obtain the calculated results quickly. However, the other stochastic solvers are quite slow (they could spend several hours solving analytic continuation problems). It is not a good idea to start calculations with them through ACGui. In such cases, users can download the relevant ac.toml files from this app, and then submit their tasks manually.\n\n\n\n\n\n","category":"module"},{"location":"library.html#Layouts","page":"Library","title":"Layouts","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"acg_layout!\nlayout_header_block\nlayout_data_block\nlayout_base_block\nlayout_maxent_block\nlayout_barrat_block\nlayout_stochac_block\nlayout_stochsk_block\nlayout_stochom_block\nlayout_stochpx_block\nlayout_calc_block\nlayout_about_block","category":"page"},{"location":"library.html#ACGui.acg_layout!","page":"Library","title":"ACGui.acg_layout!","text":"acg_layout!(app::Dash.DashApp)\n\nGlobal layout for the ACGui app. There are five tabs, namely Data, General, Solver, Run, and About.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_header_block","page":"Library","title":"ACGui.layout_header_block","text":"layout_header_block()\n\nLayout for the header part.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_data_block","page":"Library","title":"ACGui.layout_data_block","text":"layout_data_block()\n\nLayout for the data tab. Users can upload imaginary-time or Matsubara Green's functions via this tab.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_base_block","page":"Library","title":"ACGui.layout_base_block","text":"layout_base_block()\n\nLayout for the general tab. Users should configure the basic parameters for analytic continuation calculations in this tab.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_maxent_block","page":"Library","title":"ACGui.layout_maxent_block","text":"layout_maxent_block()\n\nLayout for the solver tab. It is the panel for the MaxEnt solver. Note that this panel can be hidden, if solver in general tab is not equal to MaxEnt.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_barrat_block","page":"Library","title":"ACGui.layout_barrat_block","text":"layout_barrat_block()\n\nLayout for the solver tab. It is the panel for the BarRat solver. Note that this panel can be hidden, if solver in general tab is not equal to BarRat.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_stochac_block","page":"Library","title":"ACGui.layout_stochac_block","text":"layout_stochac_block()\n\nLayout for the solver tab. It is the panel for the StochAC solver. Note that this panel can be hidden, if solver in general tab is not equal to StochAC.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_stochsk_block","page":"Library","title":"ACGui.layout_stochsk_block","text":"layout_stochsk_block()\n\nLayout for the solver tab. It is the panel for the StochSK solver. Note that this panel can be hidden, if solver in general tab is not equal to StochSK.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_stochom_block","page":"Library","title":"ACGui.layout_stochom_block","text":"layout_stochom_block()\n\nLayout for the solver tab. It is the panel for the StochOM solver. Note that this panel can be hidden, if solver in general tab is not equal to StochOM.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_stochpx_block","page":"Library","title":"ACGui.layout_stochpx_block","text":"layout_stochpx_block()\n\nLayout for the solver tab. It is the panel for the StochPX solver. Note that this panel can be hidden, if solver in general tab is not equal to StochPX.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_calc_block","page":"Library","title":"ACGui.layout_calc_block","text":"layout_calc_block()\n\nLayout for the run tab. The users can start analytic continuation simulations and visualize the calculated results via this tab.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.layout_about_block","page":"Library","title":"ACGui.layout_about_block","text":"layout_about_block()\n\nLayout for the about tab. It is used to display the version number and author of ACGui.\n\n\n\n\n\n","category":"function"},{"location":"library.html#Callbacks","page":"Library","title":"Callbacks","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"register_callback\nparse_parameters\ncallbacks_in_data_tab\ncallbacks_in_general_tab\ncallbacks_in_solver_tab\ncallbacks_in_run_tab\ncallbacks_in_about_tab","category":"page"},{"location":"library.html#ACGui.register_callback","page":"Library","title":"ACGui.register_callback","text":"register_callback(app::Dash.DashApp)\n\nRegister all callbacks for the ACGui app.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.parse_parameters","page":"Library","title":"ACGui.parse_parameters","text":"parse_parameters(\n    pbase::String,\n    pmaxent::String,\n    pbarrat::String,\n    pstochac::String,\n    pstochsk::String,\n    pstochom::String,\n    pstochpx::String\n)\n\nConvert parameters to dictionary.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.callbacks_in_data_tab","page":"Library","title":"ACGui.callbacks_in_data_tab","text":"callbacks_in_data_tab(app::Dash.DashApp)\n\nCallbacks for the data tab. It only includes a callback, which is used to upload files from client side to server side.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.callbacks_in_general_tab","page":"Library","title":"ACGui.callbacks_in_general_tab","text":"callbacks_in_general_tab(app::Dash.DashApp)\n\nCallbacks for the general tab. It includes two callbacks. One is used to control the solver tab. The other is used to gather parameters from this tab, and then update dict-base in run tab.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.callbacks_in_solver_tab","page":"Library","title":"ACGui.callbacks_in_solver_tab","text":"callbacks_in_solver_tab(app::Dash.DashApp)\n\nCallbacks for the solver tab. It includes six callbacks. All of them are used to collect parameters that are relevant to analytic continuation solvers.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.callbacks_in_run_tab","page":"Library","title":"ACGui.callbacks_in_run_tab","text":"callbacks_in_run_tab(app::Dash.DashApp)\n\nCallbacks for the run tab. It contains three callbacks. The first one is for the Start Analytic Continuation button. The second one is for the Get ac.toml only button. The third one is for the Check err.out button.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.callbacks_in_about_tab","page":"Library","title":"ACGui.callbacks_in_about_tab","text":"callbacks_in_about_tab(app::Dash.DashApp)\n\nCallbacks for the about tab. Now it is empty.\n\n\n\n\n\n","category":"function"},{"location":"library.html#Base","page":"Library","title":"Base","text":"","category":"section"},{"location":"library.html","page":"Library","title":"Library","text":"acg_clean\nacg_run","category":"page"},{"location":"library.html#ACGui.acg_clean","page":"Library","title":"ACGui.acg_clean","text":"acg_clean()\n\nThis function will clean the current directory. It will remove all the files in the folder. So, please make sure that you are running the app in a safe directory.\n\n\n\n\n\n","category":"function"},{"location":"library.html#ACGui.acg_run","page":"Library","title":"ACGui.acg_run","text":"acg_run()\n\nIt is the main entry of the ACGui app. It will create a web ui, register some callbacks, and start the web server. By default, the web server will provide services at http://127.0.0.1:8848.\n\n\n\n\n\n","category":"function"},{"location":"install.html#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"install.html","page":"Installation","title":"Installation","text":"It is quite easy to install ACGui.","category":"page"},{"location":"install.html#Prerequisite","page":"Installation","title":"Prerequisite","text":"","category":"section"},{"location":"install.html","page":"Installation","title":"Installation","text":"Besides the Julia runtime environment, ACGui only needs the following packages:","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"TOML\nBase64\nDash\nACFlow","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"Here, TOML and Base64 are standard libraries. Dash is a web framework, users have to install it manually.","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"julia> using Pkg\njulia> Pkg.add(\"Dash\")","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"Note that ACFlow is not a registered package, so please follow its user guide to install it.","category":"page"},{"location":"install.html#How-to-install","page":"Installation","title":"How to install","text":"","category":"section"},{"location":"install.html","page":"Installation","title":"Installation","text":"The users can use the Pkg package to install the ACGui app from its github repository directly:","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"julia> using Pkg\njulia> Pkg.add(url = \"https://github.com/huangli712/ACGui\")","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"If the installed ACGui app is outdated, the users can use the following commands to upgrade ACGui:","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"julia> using Pkg\njulia> Pkg.update(\"ACGui\")","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"info: Info\nIf the users do not want to install ACGui, just have a try. The simplest way is as follows:Download the source codes of ACGui from its github repository:https://github.com/huangli712/ACGuiThen uncompress it into /home/your_home/acgui.Plug the following code in front of the acgui/util/acg.jl script:push!(LOAD_PATH, \"/home/your_home/acgui/src\")","category":"page"},{"location":"install.html#Documentation","page":"Installation","title":"Documentation","text":"","category":"section"},{"location":"install.html","page":"Installation","title":"Installation","text":"Finally, in order to generate the documentation, please type the following commands in the terminal:","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"$ pwd\n/home/your_home/acgui\n$ cd docs\n$ julia make.jl","category":"page"},{"location":"install.html","page":"Installation","title":"Installation","text":"After a few seconds, the documentation is built and saved in the acgui/docs/build directory if everything is OK. The home page of the documentation is acgui/docs/build/index.html. The users can open it with any web browsers.","category":"page"},{"location":"index.html#ACGui","page":"Home","title":"ACGui","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"A graphic user interface for the ACFlow package","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"info: Info\nThank you for using ACGui. This documentation will help you to be familiar with and explore the ACGui toolkit. It is just compatible with ACGui v0.7.0-devel.250324.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"warning: Warning\nThe ACGui toolkit is in heavy development. Please use it at your own risk. If you encounter any bugs or troubles, or require new features, please consult me directly: huangli at caep.cn","category":"page"}]
}
